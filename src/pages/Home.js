import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div >
        <h1>this is my first website</h1>
        <Link to='/allproducts'>view products</Link>
    </div>
  )
}
