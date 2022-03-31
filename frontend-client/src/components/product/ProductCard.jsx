import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, name, publisher, alter_ego, first_appearance, characters }) => {
  return (
    <div className="col" style={{maxWidth: '300px'}}>
      <div className="card h-100">
        <img src={`/assets/${name}.jpg` } className="card-img-top" alt={ name }/>
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{ alter_ego }</li>
            <li className="list-group-item">{ first_appearance }</li>
            <li className="list-group-item">{ characters }</li>
          </ul>
        </div>
        <div className="card-footer">
          <Link
            to={`/product/${id}`}
          >Ver mas</Link>
        </div>
      </div>
    </div> 
  )
}

export default ProductCard;
