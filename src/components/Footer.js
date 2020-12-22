import React from 'react';
import './Footer.css';
import { Icon } from '@iconify/react';
import codepenIcon from '@iconify-icons/ant-design/codepen-outlined';
import githubIcon from '@iconify-icons/ant-design/github-filled';
import freecodecampIcon from '@iconify-icons/simple-icons/freecodecamp';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://codepen.io/dwisatriow" target="_blank">
          <Icon icon={codepenIcon} />
        </a>
        <a href="https://github.com/dwisatriow" target="_blank">
          <Icon icon={githubIcon} />
        </a>
        <a href="https://www.freecodecamp.org/dwisatriow" target="_blank">
          <Icon icon={freecodecampIcon} />
        </a>
      </div>
      <p>Developed by Dwi Satrio W. for freeCodeCamp</p>
    </footer >
  )
}

export default Footer;