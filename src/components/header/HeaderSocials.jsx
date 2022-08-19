import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jainaakash1002/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/jainaakash1002" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/its_.aakash/?hl=en" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials