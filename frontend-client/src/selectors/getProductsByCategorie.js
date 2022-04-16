import axios from 'axios';

export const getProductsByCategorie = (categorie) => {
  return (
    axios
      .get("http://localhost:5000/api/product/list")
      .then(({ products }) => {
        console.log(products)
        products.filter( product => product.categorie === categorie );
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
  )
};
