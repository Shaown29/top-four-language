import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


const Description = () => {
    const icon = <FontAwesomeIcon icon={faAddressCard} />
    return (
        <div >
            <nav></nav>
            <div>
                <h2>About Go Language<hr className="bg-success"/></h2>
                <p><b>Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. Wikipedia
                First appeared: November 10, 2009; 11 years ago
                Typing discipline: Inferred, static, strong, structural, nominal
                Implementation language: Go, Assembly language (gc); C++ (gofrontend)
                Paradigm: Multi-paradigm: concurrent, functional, imperative, object-oriented
                OS: DragonFly BSD, FreeBSD, Linux, macOS, NetBSD, OpenBSD, Plan 9, Solaris, Windows
                License: 3-clause BSD + patent grant
                Designed by: Robert Griesemer, Rob Pike, Ken Thompson.</b></p>
                <h3>Advantage to learn go<hr className="bg-success"/></h3>
                <ul className="text-start">
                    <li><b><i>Golang Is Fast</i></b> </li>
                    <li><b><i>Golang Is Easy To Learn</i></b></li>
                    <li><b><i>Golang Is Well-Scaled</i></b></li>
                    <li><b><i>Comprehensive Programming Tools</i></b></li>
                    <li><b><i>Growing Pool Of Talent</i></b></li>
                </ul>
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

export default Description;