import React, { useState } from 'react'

export default function DarkMode() {

    const [mystyle, setMystyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const [mybtnstyle, setMybtnstyle] = useState({
        color: "white",
        backgroundColor: "black"
    });

    const [mybtnText, setMybtnTxt] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (mystyle.color == 'white') {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setMybtnTxt("Enable Dark Mode");
            setMybtnstyle({
                color: 'white',
                backgroundColor: 'black'
            })
        }
        else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black'

            })
            setMybtnTxt("Enable Light Mode");
            setMybtnstyle({
                color: 'black',
                backgroundColor: 'white'
            })

        }
    }

    return (
        <>
            <div className="jumbotron container my-5" style={mystyle}>
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <button className="btn btn-dark btn-lg my-5" style={mybtnstyle} href="/" role="button" onClick={toggleStyle}>{mybtnText}</button>
                </p>
            </div>
        </>
    )
}
