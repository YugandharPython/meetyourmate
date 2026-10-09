import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {

    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");


    const notify = () => toast("Wow so easy!");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedText(text);
        notify();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Display submitted text above the textbox */}
                <h2>{submittedText}</h2>
                <ToastContainer />
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;