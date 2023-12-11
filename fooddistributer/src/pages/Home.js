// ./pages/Home.js

import React from 'react';
import Itemcard from '../pages/Itemcard';
import data from './data'
import { Container } from 'react-bootstrap';



const Home = () => {

  return (
    <div>
      <h1 className='text-center mt-3'>All items</h1>
      <section className="py-4 container">
        <div className='row justify-content-center'>
          {data.productData && data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}

        </div>


      </section>

    </div>


  );
};

export default Home;
