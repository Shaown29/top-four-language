import React from 'react';

const Service = (props) => {
    const {name,img,price,review,recommended}=props.db;
    return (
        <div>
           <div>
                <img className="h-75 w-75 p-3" src={img} alt=""/>
           </div>
           <div className="text-white">
                <h2>Course Name:{name}</h2>
                <h2>Online Price:{price}</h2>
                <h2>Review:{review}</h2>
                <h2>Recommondation: {recommended}</h2>
           </div>
            
        </div>
    );
};

export default Service;