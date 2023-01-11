import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
   <nav>
      <div className="container">
         <div className="row">
            <h3 className="brand">  <Link to='/'> Araz Market </Link>     </h3>
            <div className="link">
            <Link to='/'> Home </Link>
            <Link to='/products'> Products</Link>
            <Link to='/basket'> Basket</Link>
            </div>
         </div>
      </div>
   </nav>
  )
}
