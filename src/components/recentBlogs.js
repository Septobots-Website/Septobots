import React from 'react'
import '../styles/global.css'

export default function recentBlogs() {
  return (
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

  )
}