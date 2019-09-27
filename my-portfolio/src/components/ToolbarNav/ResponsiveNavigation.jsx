// import React, {useState} from 'react';
import React from 'react';
import {Link} from '@reach/router'


function ResponsiveNavigation ({navLinks, background, hoverBackground,linkColor,logo}) {
    // const {hoverIndex, setHoverIndex} = useState(-1);
    // const {navOpen, setNavOpen} = useState(false);
    console.log(background, hoverBackground,linkColor,logo)
    return (    
        <nav 
        className="responsive-toolbar"
        style = {{background}}>
            <ul style = {{background}}>
                <figure>
                    <img src="src/img/rectanglelogo.png" alt="logo"/>
                </figure>
                {navLinks.map((link, index) => 
                <li key={`linkResponsiveNav${index}`} 
                    // onMouseEnter={() => setHoverIndex(index)}
                    // onMouseLeave={() => {setHoverIndex(-1)}}
                    // style={{background: hoverIndex !== index ? (hoverBackground= {BackgroundColor:'#999999'}) : ''}}
                    >
                    <Link to={link.path} style={{color: linkColor}}>
                        {link.text}
                        <i className= {link.icon}/>
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation;
