"use client"
import { useEffect } from 'react'
import Background from './Resources/logo.png'
import arrowDown from "./Resources/arrow-down.png"
import menuBlack from "./Resources/menu_black_24dp 1.png"
import styles from './header.module.css'
const Header = () => {
    useEffect(() => {
        //toggle sandwich menu
        const sandwichButton = document.getElementById('sandwich')

        sandwichButton.addEventListener('click', () => {
            document.getElementById('fullOverlay').style.display = 'block'
            document.getElementById('fullOverlay').style.backgroundColor = '#0000007f'
            document.getElementById('fullOverlay').style.transition = 'all 2s ease'
        })

        document.addEventListener('click', (event) => {
            if (!sandwichButton.contains(event.target)) {
                document.getElementById('fullOverlay').style.display = 'none'
            }
        })

        //add links to logos
        let logos = document.getElementsByClassName('sign')
        for (let i = 0; i < logos.length; i++) {
            logos[i].addEventListener('click', () => {
                window.open('./', '_self')
            })
        }
    }, [])

    return (
        <>
            <div id="fullOverlay">
                <div id="sandwichNav">
                    <ul>
                        <li><a href="./">
                            <p>Home</p>
                        </a></li>
                        <li><a href="./AboutUs">
                            <p>About Us</p>
                        </a></li>
                        <li><a href="./#contactus">
                            <p>Contact Us</p>
                        </a></li>
                    </ul>
                </div>
            </div>
            <nav className='header'>
                <label className="sign">
                    <figure className="logo" style={{ backgroundImage: "url(" + Background.src + ")" }}></figure>
                    <h5 className="logoName">LAIMUNATI</h5>
                </label>
                <ul id='navlinks'>
                    <a href="./" className='navlink'>
                        <li className='navlinkitem'>Home</li>
                    </a>
                    <a href="./AboutUs" className='navlink'>
                        <li className='navlinkitem'>About Us</li>
                    </a>
                    <li className="ourbiz navlinkitem">
                        <a className='navlink'>Our Businesses<img src={arrowDown.src} alt=""></img></a>
                        <div id="dropdown">
                            <ul>
                                <a href="./Build" className='dropdownItem'>
                                    <li className='item'>Build</li>
                                </a>
                                <a href="./Energy" className='dropdownItem'>
                                    <li className='item'>Energy</li>
                                </a>
                                <a href="./Investments" className='dropdownItem'>
                                    <li className='item'>Investments</li>
                                </a>
                                <a href="./Technology" className='dropdownItem'>
                                    <li className='item'>Technology</li>
                                </a>
                            </ul>
                        </div>
                    </li>
                    <a className='navlink' href="/#contactus">
                        <li className='navlinkitem'>Contact Us</li>
                    </a>
                </ul>
                <button id="sandwich">
                    <img src={menuBlack.src} alt=""></img>
                </button>
            </nav>
        </>
    )
}

export default Header;