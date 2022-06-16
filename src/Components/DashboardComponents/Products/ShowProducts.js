import React from 'react';
import { Col, Container } from 'react-bootstrap';

const ShowProducts = ({ allProduct}) => {
    const {id, name, price}= allProduct;
    return (
        <Col>
    <Container fluid>
       <Col>
         <div className="containers">
           <div className="row">
             <div className="aaaaa">
               <div className="card border-0">
                 <div className="card-body">
                   <div className="icon-button">
                     
                   </div>
                   {/* <Link to={`/single-item/${_id}`}>
                     <img
                       src={image}
                       className="img-fluid p-1"
                       alt="Girl in a jacket"
                     />
                   </Link> */}
                   <h4 className="card-title">title</h4>
                   <h6 className="card-subtitle mb-2 text-muted">
                    quantity
                   </h6>
                   <p className="card-text">description</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Col>
     </Container>
      </Col>
    );
};

export default ShowProducts;