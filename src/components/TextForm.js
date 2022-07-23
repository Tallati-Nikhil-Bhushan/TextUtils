import React, { useState } from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("Enter text here")

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpClick = ()=>
    {
        setText(text.toUpperCase())
    }

    const handleLoClick = ()=>
    {
        setText(text.toLowerCase())
    }

    return (
        <>
        <div className='container'>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> Words , <b>{text.length}</b> Characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
