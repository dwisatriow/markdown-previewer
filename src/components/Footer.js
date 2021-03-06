import React from 'react';
import './Footer.scss';
import { Icon } from '@iconify/react';
import codepenIcon from '@iconify-icons/ant-design/codepen-outlined';
import githubIcon from '@iconify-icons/ant-design/github-filled';
import freecodecampIcon from '@iconify-icons/simple-icons/freecodecamp';

function Footer() {
  return (
    <footer id="app-footer">
      <div id="profile-link">
        <a href="https://codepen.io/dwisatriow" target="_blank">
          <Icon icon={codepenIcon} width="28px" height="28px" />
        </a>
        <a href="https://github.com/dwisatriow" target="_blank">
          <Icon icon={githubIcon} width="28px" height="28px" />
        </a>
        <a href="https://forum.freecodecamp.org/u/dwisatriow" target="_blank">
          <Icon icon={freecodecampIcon} width="32px" height="32px" />
        </a>
      </div>
      <p>Developed by Dwi Satrio W.</p>
    </footer >
  )
}

export default Footer;