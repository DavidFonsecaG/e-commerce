import React, { useState } from 'react';
import ButtonIcon from '../buttons/ButtonIcon';
import SearchFormAdmin from '../forms/SearchFormAdmin';


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
