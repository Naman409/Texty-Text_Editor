import React, { useState } from 'react'

export default function TextForm(props) {
    const handleLowerCase = () => {
        // console.log("Convert to LowerCase" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case !","success");
    }

    const handleUpperCase = () => {
        // console.log("Convert to LowerCase" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case !","success");
    }

    const handleClear = () => {
        // console.log("Convert to LowerCase" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Cleared your text-area !","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard !","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed !","success");
    }


    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    // setText('new');


    return (
        <>
            <div className="container my-3" style={{ color: (props.mode === 'dark' ? 'white' : 'black') }} >
                <label className='my-2'><h2>{props.heading}</h2></label>

                <textarea className="form-control" placeholder='Enter your text' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="5"></textarea>

                <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-1`} disabled={text.length===0} onClick={handleLowerCase} >Convert text to lowercase</button>

                <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-1`} disabled={text.length===0} onClick={handleUpperCase} >Convert text to UpperCase</button>

                <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-1`} disabled={text.length===0} onClick={handleClear} >Clear Text</button>

                <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-1`} disabled={text.length===0} onClick={handleCopy} >Copy Text</button>

                <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-1`} disabled={text.length===0} onClick={handleExtraSpaces} >Remove extra spaces </button>

            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2 >Text Summary</h2>

                <p>Number of Words : <b>{text.split(" ").length - 1}</b> and Number of Characters : <b>{text.length}</b></p>
                <p>Time to read : <b> {0.008 * (text.split(" ").length - 1)} </b> minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>

        </>
    )
}
