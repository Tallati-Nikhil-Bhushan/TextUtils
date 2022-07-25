import React, { useState } from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("Enter text here")

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpClick = ()=>
    {
        setText(text.toUpperCase())
        props.showAlert("text converted to uppercase","success");
    }

    const handleLoClick = ()=>
    {
        setText(text.toLowerCase())
        props.showAlert("text converted to lowercase","success");
    }

    const handleClearClick = ()=>
    {
        setText("")
        props.showAlert("text is cleared","success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("text copied to clipboard","success");

    }

    const handleExtraSpaces = ()=>{
        setText(text.split(/[ ]+/).join(" "))
        props.showAlert("extra spaces removed","success");
    }

    return (
        <>
        <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" style = {{backgroundColor:`${props.mode==="light"?"white":"black"}`,color:`${props.mode==="light"?"black":"white"}`}} value={text} onChange = {handleOnChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> Words , <b>{text.length}</b> Characters</p>
            <p>{(text.split(" ").length)*(1/125)}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
