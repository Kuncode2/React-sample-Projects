import React from 'react'
import { nestedItems } from './nesteditemd'
import MenuItems from './MenuItems'
const Nested = () => {
  return (
   <nav>
    <ul className='menus'>
      {
        nestedItems.map((menu,index)=>{
          return <MenuItems items={menu} key={index} />
        })
      }
    </ul>
   </nav>
  )
}

export default Nested