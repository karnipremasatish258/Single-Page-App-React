import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact US</h1>
        <form>
          <div>
            <lable>Name</lable>
            <input type='text' required placeholder='Abc'></input>
          </div>
          <div>
            <lable>Email</lable>
            <input type='email' required placeholder='Abc@xyz.com'></input>
          </div>
          <div>
            <lable>Message</lable>
            <input type='text' required placeholder='Tell us about your query...'></input>
          </div> 
          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact