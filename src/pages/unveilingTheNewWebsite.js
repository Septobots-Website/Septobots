import React from 'react'
import recentBlogs from '../components/recentBlogs'
import Layout from '../components/Layout'
import titleImg from '../components/img/blogImg/blog1/article1.jpg'

export default function unveilingTheNewPage() {
  return (
  /* 
    simple blog template.
    this template can be copied and pasted on this folder to create a new one and we can simply use the gatsbyjs ability to use things such as <Layout> to create a new blog page.
    the top of the article will have the name of the author and the date.
    underneath that will be the title of the blog.
    underneath that will be the blog itself:
        it will have a small paragraph used to hook the reader, a thesis if you will
        a picture will follow that paragraph
        about two or three paragraphs will follow this picture
        there will be an opportunity to upload picture and showcase them right after the paragraphs
        there will be a conclusion paragraph
        there will be more pictures and thank you section that will thank members, parents, sponsors and such
*/

<Layout>
    <div className="blog">
        <div className="blogHeader">
            <h1>Unveiling the Newly Designed Webpage</h1>
            <p>December 30 2022 * 5 minute read</p>
        </div>
        <div className="authorSummary">
            <img src='#'></img>
            <p>Written by Ivan Reyes: Mentor fo the Robotics Club. Bassist and Software/Web Designer</p>
        </div>
        <div className="blogBody">
            <div className="blogBodyHeader">
                <img src={titleImg}></img>
                <h1>A New Look for A New Year</h1>    
            </div>

            <div className="blogImages">
                <img src="#"></img>
                <img src="#"></img>
            </div>

            <div className="blogBodyParagraph">
                <h3>New Year New Me</h3>
                <p>Its been well over two years since I decided to work on the website.
                    it was very outdated and it was very difficult to work with since i used WordPress to build the website.
                    I've recently transfered to CSUMB and i took a web development class and i decided to use the skills i learned to build a new website.
                </p>
                <h3>The Challenges</h3>
                <p>I failed to realize that school courses only teach you the very basics. 
                    The fundamentals.
                    I learned how to use HTML, CSS, and Javascript to build websites for class assignemts but design was not somethign that we had to prioritize.
                    Near the end of the semester, we were introduced to Express and Node.js but that was only to build a simple server.
                    For this very specific project, I decided to use Gatsby.js to build the website.
                    Gatsby.js is a static site generator that uses React.js to build the website. 
                    At least that is what ive read. I dont know as much as i would like to know about it but i am trying.
                    Responsive design was also somethign that i had to learn on my own during this past week.
                    It can be a bit dicouraging to learn on your own but i would often come to the realization that there is a massive gap between me and other students at CSUMB.
                </p>
            </div>

            <div className="closingStatement">
                <h4>A Small Conclusion</h4>
                <p>To summarize,
                    i have learned a lot in the past week and it reminds me of when i was in the robotics club.
                    i was put in a situation where i had to learn on my own and i had to learn fast.
                    Programming a robot is no easy task but it does teach you a lot about yourself and how you approch problems.
                    I am very grateful for the opportunity to work on this website and i am very excited to see what the future holds for the robotics club.
                    I do wish this team the best of luck and that they realize that its not about the treasure in the end but the friends we make along the way.
                </p>
                <h5>Thanks to: </h5>
                <ul>
                    <li>The Robotics Club and all the opportunities it offered </li>
                    <li>Team 6884 for helping us out throughout the season</li>
                    <li>The friends I have made</li>
                    <li>Our Sponsor Apple</li>
                </ul>

            </div>
        </div>
    </div>
    <recentBlogs/>
</Layout>

  )
}
