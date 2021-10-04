import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Home.css'


const Home = () => {
    const icon = <FontAwesomeIcon icon={faAddressCard} />
    return (
        <div className="back-color">
            <nav></nav>
            <div>
                <h2>Top 4 language to learn in 2021.<hr classname="bg-success"/></h2>
            </div>
            <div className="row justify-content-center ">
                
                <div className="col-md-4 w-25 h-25 bg-black border border-warning rounded border border-1 m-1">
                <div>
                <img className="h-50 w-50 p-3" src={'https://venturebeat.com/wp-content/uploads/2018/09/python3.jpg?w=1200&strip=all'} alt=""/>
           </div>
            <div className="text-white ">
                <h4>Language Name:Python</h4>
                <h4>Skill:Do not need</h4>
                <h4>Review:Very good</h4>
                <h4>Recommondation: Highly</h4>
            </div>
        </div>

        <div className="col-md-4 w-25 h-25 bg-black border border-warning rounded border border-1 m-1">
                <div>
                <img className="h-50 w-50 p-3" src={'https://media-exp1.licdn.com/dms/image/C560BAQH0EKHvb6xgHQ/company-logo_200_200/0/1554953142515?e=2159024400&v=beta&t=pFDnRgyZ-f1oxeNN-CLY731-U_FuuRmzQwd2vHgue7A'} alt=""/>
           </div>
           <div className="text-white">
                <h4>Language Name:Python</h4>
                <h4>Skill:Do not need</h4>
                <h4>Review:Very good</h4>
                <h4>Recommondation: Highly</h4>
           </div>
                
                </div>

                <div className="col-md-4 w-25 h-25 bg-black border border-warning rounded border border-1 m-1">
                <div>
                <img className="h-50 w-50 p-3" src={'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/s400/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg'} alt=""/>
           </div>
           <div className="text-white ">
                <h4>Language Name:Python</h4>
                <h4>Skill:Do not need</h4>
                <h4>Review:Very good</h4>
                <h4>Recommondation: Highly</h4>
           </div>
                
                </div>


                <div className="col-md-4 w-25 h-25 bg-black border border-warning rounded border border-1 m-1">
                <div>
                <img className="h-50 w-50 p-3" src={'https://res.cloudinary.com/pagnihotry/image/upload/v1532622064/pagnihotry/Go-Logo_Blue-trimmed.jpg'} alt=""/>
           </div>
           <div className="text-white ">
                <h4>Language Name:Python</h4>
                <h4>Skill:Do not need</h4>
                <h4>Review:Very good</h4>
                <h4>Recommondation: Highly</h4>
           </div>
            </div>
            <h2>In here you can choose any one language but I recomment one.If you want to know that so, go services and click there.You will find exiciting things.</h2>
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

export default Home;