import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {
    const icon = <FontAwesomeIcon icon={faAddressCard} />
    return (
        <div>
            <nav ></nav>

            <div>
                <h2>About Us <hr classname="bg-success"/></h2>
                <p><b><i>In services I provide some website that teach online golang courses.In 2021,It is very important to learn golang because it is quite new, very fast and powerful.So, in my website I incourage you to learn golang.I already learn go and you will be thrilled to know that it is the best one.If you want to know more about golang go and click description.In my website I always provide which is important for everyone to reach there goal.If you want more please sent an email.And Thanks in advance because you will learn something great.</i></b> </p>
            </div>
            <div>
                <footer className="bg-black text-white fixed-bottom">
                    <h2>You can concact us</h2>
                    <h3>{icon} email:abc@yoyo.com</h3>
                    <h5>Copyright save in Bulgaria</h5>
                </footer>
            </div>
        </div>
    );
};

export default AboutUs;