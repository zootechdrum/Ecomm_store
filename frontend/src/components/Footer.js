import React from 'react'
import footStyle from './footStyle.module.css'


const Footer = () => {
  return (
    <footer className={footStyle.container}>
      <div className={footStyle.legalContent}>
            Copyright &copy; Proshop
      </div>
      <div className={footStyle.socialIcons}>
        <ul class={footStyle.socialIcons}>
          <li class={footStyle.facebook}><a href="https://www.facebook.com/aaronmfuller"><i class="fa fa-fw fa-facebook"></i>Facebook</a></li>
          <li class={footStyle.twitter}><a href="https://www.twitter.com"><i class="fa fa-fw fa-twitter"></i>Twitter</a></li>
          <li class={footStyle.instagram}><a href="https://www.instagram.com/aaronfuller_lv"><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>
          <li class={footStyle.linkedin}><a href="https://www.linkedin.com/in/aaron-fuller-01809b12/"><i class="fa fa-fw fa-linkedin"></i>LinkedIn</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer