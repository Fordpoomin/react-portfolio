import React, { useState } from 'react'
import css from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
        <div className={css.container}>
          <div className={css.nav_con}>
            <div className={css.logo}>
              <a href="#">FORD PM</a>
            </div>
            <ul>
              <li><a href="#services">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={css.button}>
              <a href="#">Hire Me</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <FaBars className={css.bars} onClick={handleToggle} />
          {isToggled ? (
            <>
              <ul className={css.mobile_menu}>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className={css.mobile_button}>
                <a href="#">Hire Me</a>
              </div>
            </>
          ) : null}

        </div>
    </nav>
  )
}

export default Navbar
