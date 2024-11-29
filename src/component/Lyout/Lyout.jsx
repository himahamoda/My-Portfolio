import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './Lyout.module.css'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Social from '../Work/Social'
import { Web } from '@mui/icons-material'
// import Overview from '../HomeSlider/Overview'
import ImageGrid from '../Projects/Gallery/Gallery'


export default function layout() {


  return <>
    <Nav/>

    <Outlet>
<Home/>

    </Outlet>

    <Social/>
    <Footer/>
  </>
}
