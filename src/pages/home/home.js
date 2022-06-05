import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import { getAllProducts } from "../../services/api";
import CardComponent from "../../components/card/card-component";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchGetAllProduct = async () => {
    await setisLoading(true);
    await getAllProducts()
      .then((response) => setDataProducts(response.data))
      .catch((error) => {
        console.log(error);
      });
    await setisLoading(false);
  };

  useEffect(() => {
    fetchGetAllProduct();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to my mini project</h1>
      {isLoading ? (
        <ReactLoading type="bubbles" color="#0D6EFD" className="m-auto mt-5" />
      ) : (
        <div className=" d-flex flex-wrap">
          {dataProducts.map((product) => (
            <Link to={`/detail-product/${product.id}`} className="text-decoration-none">
              <CardComponent title={product.name} price={product.price} image={product.image} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
