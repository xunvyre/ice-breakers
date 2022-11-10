import React from 'react';
import logo from '../../assets/images/journify_icon.jpg';

const Header = () =>
{
    return (
        <header id="home">
            <div class="col-9">
                <div class="row">
                    <img class="logo" src={logo} alt="An open book with a ribbon marker: JOURNIFY's logo."/>
                    <h1>JOURNIFY</h1>
                </div>
                <div class="row slogan-bg">
                    <h3>A JOURNAL FOR EVERY JOURNEY</h3>
                </div>
            </div>
        </header>
    )
};

export default Header;