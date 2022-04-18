import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import SearchFormAdmin from '../../forms/SearchFormAdmin';

// Styles
import '../../../scss/searchFormBtn.scss';


const SearchFormBtn = () => {

	  // Handeling Search Button
		const [searchBoxOn, setSearchBoxOn] = useState(false);

		const handleSearchBoxBtn = (e) => {
			e.preventDefault();
			setSearchBoxOn(!searchBoxOn)
		};

	return (

		<div className='search-form-btn-wrapper'>

			<ButtonIcon
				className='search-btn'
				iconName='search'
				onClick={handleSearchBoxBtn}
				classNameIcon='c-grey md-24'
			/>

			{/* Dropdown - Search */}
			{
				searchBoxOn && (
					<div className="wrapper-form-admin">
						<SearchFormAdmin />
					</div>
				)
			}
		</div>
	)
}

export default SearchFormBtn;
