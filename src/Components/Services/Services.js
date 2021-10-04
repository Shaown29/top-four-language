import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
    const icon = <FontAwesomeIcon icon={faAddressCard} />
    const [dbs,setDbs]=useState([]);
    useEffect(()=>{
        fetch('/datas.JSON')
        .then(res=>res.json())
        .then(data=>setDbs(data))
    },[])
    return (
        <div className="back-color">
            <nav className="fixed-top"></nav>
           <div className="row justify-content-center ">
            {
                dbs.map(db=> <div className="col-md-4 w-25 bg-black border border-warning rounded border border-2 m-2">
                    <Service db={db} key={db.id}></Service>
                </div>)
            }
           </div> 
           <div>
                <footer className="bg-black text-white">
                    <h2>You can concact us</h2>
                    <h3>{icon} email:abc@yoyo.com</h3>
                    <h5>Copyright save in Bulgaria</h5>
                </footer>
            </div>
        </div>
    );
};

export default Services;