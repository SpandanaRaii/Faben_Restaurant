import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>Faben Inn</div>
      <button className={style.logout}>Log Out</button>
    </header>
  )
}

export default Header