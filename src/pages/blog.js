import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import placeholder from "../components/img/placeholder.jpg"
import thumbnail1 from "../components/img/blogImg/blog1/article1.jpg"

export default function blog() {
  return (
    <Layout>
        {/* the idea is to have a blog page that will allow me to copy and paste a single blog template.  
         i want this page to have a grid. three columns and as many rows necessary. 
         there is a dedicated amount of space for a picture, the date, the title of the blog and a small summary.
          when you click on the blog, it will take you to a new page with the full blog.
          i want to be able to copy and paste the template and have it automatically add a new row to the grid.

        */}
    
    <section className="blogBody">
      <div className="blog-grid">
        <div className="blog-item item flex">
              <Link to="/unveilingTheNewWebsite"><img src={thumbnail1} alt="thumbnail1" />
              <h1>Unveiling the new Website</h1>
              <h4>December 30th 2022 • 6 minute read</h4>
              <p>The first blog post created by me, the web designer</p>
              </Link>
        </div>
      </div>
    </section>

    </Layout>
  )
}
