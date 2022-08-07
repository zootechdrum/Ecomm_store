import React from 'react'
import footStyle from './footStyle.module.css'


const Footer = () => {
  return (
    <footer className={footStyle.container}>
      <div className={footStyle.legalContent}>
            Copyright &copy; Proshop
      </div>
      <div className={footStyle.socialIcons}>
        <ul class="socialIcons">
          <li class="facebook"><a href="https://www.facebook.com/aaronmfuller"><i class="fa fa-fw fa-facebook"></i>Facebook</a></li>
          <li class="twitter"><a href="https://www.twitter.com"><i class="fa fa-fw fa-twitter"></i>Twitter</a></li>
          <li class="instagram"><a href="https://www.instagram.com/aaronfuller_lv"><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>
          <li class="steam"><a href="https://www.linkedin.com/in/aaron-fuller-01809b12/"><i class="fa fa-fw fa-linkedin"></i>LinkedIn</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer