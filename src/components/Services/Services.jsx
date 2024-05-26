import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop  } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Web Development</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
                </p>
            </div>
            <div className={styles.services_items}>
                <FaPaintbrush />
                <h4>Web Design</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
                </p>
            </div>
            <div className={styles.services_items}>
                <FaDesktop />
                <h4>Front-end Consulting</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services
