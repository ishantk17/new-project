import React from 'react'
import Carousel from './Carousel'
import data from "../utils/NavItem.js"
import "../Sass/Main.scss"
function Main() {
  return (
    <div className='main-container'>
      <div className='head-container'>
         <h1>Featured Products</h1>
         <p>Explore and discover a variety of products</p>
      </div>
      <div>
        <Carousel data={data}/>
      </div>
    </div>
  )
}

export default Main