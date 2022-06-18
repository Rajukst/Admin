import React from 'react';
import { Col, Container } from 'react-bootstrap';

const SetBlogs = ({ getAllBlogs}) => {
    const {userId, body, title, url}= getAllBlogs;
    return (
        <Col>
        <Container fluid>
           <Col>
             <div className="containers">
               <div className="rows">
                 <div className="aaaaa">
                   <div className="card border-0">
                     <div className="card-body">
                       <div className="icon-button">
                         
                       </div>
                         <img
                           src={url}
                           className="img-fluid p-1"
                           alt="Girl in a jacket"
                         />
                
                       <h4 className="card-title">{title}</h4>
                       {/* <h6 className="card-subtitle mb-2 text-muted">
                        {id}
                       </h6> */}
                       {/* <p className="card-text">{thumbnailUrl}</p> */}
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

export default SetBlogs;