import React from 'react'
import {ReactComponent as Logo} from '../Pictures/cart.svg'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'

function Header() {
    return (
        <div className="main-navbar">
            <div className="company">
                <Link to='/'>
                    Your Cart
                </Link>
            </div>
            <div className="search">
                <input type="text" placeholder='Search...'></input>
            </div>
            <div className="Cart">
                <Link to='/cart'>
                    <Logo />
                </Link>
            </div>
        </div>
    )
}

export default Header
