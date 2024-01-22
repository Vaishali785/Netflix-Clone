import React, { useState,useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false);
    function scrollFunc() {
        if(window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    }
    useEffect(() => {
        
        window.addEventListener("scroll", scrollFunc)
        return () => {
            window.removeEventListener("scroll",scrollFunc);
        };
    }, [])

    return (
        <div className={`nav ${show ? "nav_black" : ""}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className='netflix_logo'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar" className='netflix_avatar'/>
            
        </div>
    )
}

export default Nav;