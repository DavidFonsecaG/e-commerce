import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, name, shortDescription, price }) => {
  return (
    <div className="col" style={{maxWidth: '300px'}}>
      <div className="card h-100">
        <img src={`img/${name}.jpg` } className="card-img-top" alt={ name }/>
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{ shortDescription }</li>
            <li className="list-group-item">{ price }</li>
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
