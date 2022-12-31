import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function BlogLayout({children}) {
  return (
    /*
    
    similar to layout.js, this will be the template for the blog pages.
    it will be used in the blogTemplate.js file.
    it will just have the addition of a small section underneath that comes before the footer.
    this section will be used to display the most recent blog posts. three max. the see all button will be used to navigate to the blog page.
  */
    <div className="BlogLayout">
      <Navbar/>
      <div>
        {children}
      </div>
      <section className="recentBlogs">
        <div className="recentBlogGrid">
          <div className="recentBlog">
            <img src="#" alt="blogImage" />
            <h3>Blog Title</h3>
            <p>Author Name</p>
          </div>
          <div className="recentBlog">
            <img src="#" alt="blogImage" />
            <h3>Blog Title</h3>
            <p>Author Name</p>
          </div>
          <div className="recentBlog">
            <img src="#" alt="blogImage" />
            <h3>Blog Title</h3>
            <p>Author Name</p>
          </div>
        </div>
        <button type="button" className="seeAllButton">See All</button>
      </section>
      <footer className="footer">
        <p>2019-2022 Team 7777 * The Septobots Robotics Club</p>
      </footer>
    </div>

  )
}
