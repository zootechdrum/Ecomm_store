import React from 'react'
import footStyle from './footStyle.module.css'

const Footer = () => {
  return (
    <footer className={footStyle.container}>
      <div className={footStyle.legalContent}>
            Copyright &copy; Proshop
      </div>
      <div clasName={ footStyle.socialIcons}>
        <h1>Hello world</h1>
      </div>

    </footer>
  )
}

export default Footer