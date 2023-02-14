import React, { Fragment } from 'react'
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../layout/MetaData';

const product = {
  name:"Nike T-Shirt",
  images:[{url:"https://m.media-amazon.com/images/I/311oI8PL6yL.jpg"}],
  price:"$1000",
  _id:"Vegeta"
}

const Home = () => {
  return (
    <Fragment>

    <MetaData title="ZIGSHOP" />

        <div className='banner'>
            <p>Welcome To ZIGSHOP</p>
            <h1>FIND AMAZING PRODUCT BELOW</h1>

            <a href="#container">
                <button {...window.scroll({behavior:'smooth'})}>
                    Scroll
                </button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Product</h2>

        <div className='container' id='container'>
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />

          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </div>
    </Fragment>
  )
}

export default Home;