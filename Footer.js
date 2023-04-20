import React from 'react'
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <IconButton href="">
            <InstagramIcon/>
            </IconButton>
            <IconButton href="">
            <GitHubIcon/>
            </IconButton>
            <span>
              <IconButton href="">
          <LinkedInIcon />
          </IconButton>
          </span>
        </div>
    </div>
  )
}

export default Footer