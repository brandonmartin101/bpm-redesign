import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className='has-text-centered'>
      <h1>NOT FOUND</h1>
      <p>Sorry, this page doesn't exist. You should head back <Link to='/' title='Home'>HOME</Link> and try to figure things out from there.</p>
    </div>
  </Layout>
)

export default NotFoundPage
