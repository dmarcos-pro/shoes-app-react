import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../actions/actions";
import axios from "axios";

// CSS
import product from '../styles/products.module.scss';

const Products = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.mainReducer.main);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [active, setActive] = useState('all');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then(function(response){
      setProductList(response.data);
    });
    axios.get(`https://fakestoreapi.com/products/categories`).then(function(response){
      setFilter(response.data);
    });
  }, []);
  const handleCategory = (filter) => {
    if (filter === 'all') {
      setActive(filter);
      axios.get(`https://fakestoreapi.com/products`).then(function(response){
        setProductList(response.data);
      });
    } else {
      setActive(filter.filter);
      axios.get(`https://fakestoreapi.com/products/category/${filter.filter}`).then(function(response){
        setProductList(response.data);
      });
    }
  }

  
  return (
    <section className={product.layout}>
      <div className={product.filter}>
        <p>Filtrer par catégorie</p>
        <div>
          <span className={`${active == 'all' ? product['active'] : ''}`} onClick={(e) => handleCategory('all')}>Toutes</span>
          {filter.map( (filter, index) => (
            <span key={index} className={`${active == filter ? product['active'] : ''}`} onClick={(e) => handleCategory({filter})}>{filter}</span>
          ))}
        </div>
      </div>
      <div className={product.item}>
        {productList.map(item => (
            <div key={item.id} className={`item-${item.id}`}>
              <figure>
                <img src={item.image} />
              </figure>
              <div className={product.content}>
                <div>
                  <p className={product.title}>{item.title}</p>
                </div>
                <p>{item.rating['rate']}/5 ({item.rating['count']} votes)</p>
                <p className={product.price}>{item.price}€</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;