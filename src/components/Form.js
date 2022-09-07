import React from 'react'

export default function Form() {
  return (
    <div>
        <h1>Sign-in  Form</h1>
        <form>
            <input type="text" name="userName"/>
            <input type="email" name="email"/>
            <button>Click to submit</button>
        </form>
    </div>
  )
}
