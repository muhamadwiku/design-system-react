import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/Logo.svg';
import styles from "./styles.module.css";


export default function Navbar() {
  const menuList = [
    {
      name: 'Home',
      pathName: '/'
    },
    {
      name: 'Blog',
      pathName: '/blog'
    },
    {
      name: 'About Us',
      pathName: '/about-us'
    }
  ];


  return (
    <nav className={styles.root}>
      <div className ={styles.container}>
        <figure>
          <img alt="logo" src={logo}/>
        </figure>
        <ul className={styles.navItem}>
          {
            menuList.map((i, idx) => (
              <li key={idx}>
                <Link to={i.pathName}>{i.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav >
  );
}
