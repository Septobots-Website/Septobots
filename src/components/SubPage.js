import React from 'react'

export default function SubPage() {
  return (
    <div className="subPage">
    <h1>Contact Us</h1>
          
          <div className="addy">
            <p>Greenfield High School</p>
            <p>205 S. El Camino Real</p>
            <p>Greenfield, CA 93927</p>
          </div>

          <div className="mssg">
            <form method="post" action="https://getform.io/{}">
              <label>
                Name:
                <input type="text" name="name"/>
              </label>
              <label>
                Phone Number:
                <input type="text" name="number"/>
              </label>
              <br/>
              <label>
                Email:
                <input type="email" name="email"/>
              </label>
              <br/>
              <label>
                Message:
                <textarea className="message" name="message" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
              </label>
            </form>
          </div>

    </div>
  )
}
