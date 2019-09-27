import React from 'react';
import {Router} from '@reach/router'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import ResponsiveNavigation from './components/ToolbarNav/ResponsiveNavigation'
// import logo from './img/rectanglelogo'
import './App.css';

function App() {
    const navLinks = [
		{
            text: 'Inicio',
            path: '/Home',
            icon: 'ion-ios-home'
        },
        {
            text: 'Sobre Mi',
            path: '/contact',
            icon: 'ion-ios-information-circle-outline'
        },
        {
            text: 'Portafolio',
            path: '/portfolio',
            icon: 'ion-ios-briefcase'
        },
        {
            text: 'Trayectoria',
            path: '/career-path',
            icon: 'ion-ios-ribbon'
        },
        {
            text: 'Contacto',
            path: '/contact',
            icon: 'ion-ios-mail'
        },
    ]
		return ( <
			div className = "App" >
				<ResponsiveNavigation
				navLinks = {navLinks}
				// logo = {logo}
				/>
				<Router>
					<Home path="/Home"/>
					<About path="/about"/>
					<Career path="/career-path"/>
					<Contact path="/contact"/>
					<Portfolio path="/portfolio"/>
				</Router>
			</div>
		);
}

export default App;