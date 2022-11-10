import React from 'react';
import Donate from './Donate/Donate';

const Footer = () =>
{
  return (
    <footer>
        <div class="row">
            <p class="col">
                Team Lead: <a href="https://github.com/jorgegarit">Jorge Garit</a><br/>
                Front-End Design: <a href="https://github.com/xunvyre">Victoria David</a> and <a href="https://github.com/Hickups789">Jacky Turnmeyer</a><br/>
                Back-End Development: <a href="https://github.com/LibhartLL">Lindsay Libhart</a> and <a href="https://github.com/mike-jordan79">Michael Jordan</a>
            </p>
            <Donate class="col"/>
            <h3 class="col">JOURNIFY &copy; 2022</h3>
        </div>
    </footer>
  )
};

export default Footer;