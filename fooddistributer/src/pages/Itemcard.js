import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {
  const {addItem}=useCart();
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4 '>
      <div class="card p-0 overflow-hidden h-100 shadow"  >
        <img src={props.img} className="card-img-top img-fluid" />
        <div class="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">RS.{props.price}</h5>
          <p className="card-text">{props.desc}</p>
          <Button className="btn btn-success"
           onClick={()=>addItem(props.item)}>
            Add to cards </Button>
        </div>
      </div></div>
  );
};

export default Itemcard;
