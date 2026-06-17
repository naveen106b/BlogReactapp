import React from 'react'

const App = () => {
  return (
    <> 
    <div>Artificial Intelligence Blogs</div>
    <ul>
      <li>Blog 1: Introduction to Machine Learning</li>
      <li>Blog 2: Deep Learning Techniques</li>
      <li>Blog 3: Natural Language Processing</li>
      <li>Blog 4: Computer Vision Applications</li>
      <li>Blog 5: AI Ethics and Future Trends</li>
    </ul>
  
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br /> <br/>
        <label>Message:</label>
        <textarea name="message"></textarea>
        <br />
        <button type="submit">Submit</button>
        <h2>Have a noice day🥰</h2>
      </form>
    </div>
    </>
  )
}


export default App