import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './../../../../images/cookbook-logo.png';
import './header.scss'

let HomePageHeader = (props) => {
  return (
    <div className ='home-page-header' >
        <div className='home-page-logo'>
            <Image src={logo} size='medium' />
        </div>
        <div className ='home-page-welcome'> Welcome to Cookbook Recipes Site! </div>
    </div>
  )
}

export default HomePageHeader