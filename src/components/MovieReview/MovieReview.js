import "./MovieReview.css"
import { useState } from "react"
import { createComment } from '../../services/firestore'
import { useParams } from "react-router-dom";

export default function MovieReview() {
    const getDate = () => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const hour = now.toLocaleTimeString();
        const dateHour = `${date} at ${hour}`;
        return dateHour
    }

    const { id } = useParams()
    const [inputText, setInputText] = useState(
        {
            username: "",
            comments: "",
            file: null,
            date: getDate()
        })
    const [sendMsg, setSendMsg] = useState(false)

    const handleChange = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        let newValue = { ...inputText }
        newValue[inputName] = inputValue
        setInputText(newValue)
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setInputText({ ...inputText, file: reader.result });
        };
        console.log(inputText)
    };

    const onSubmitInput = (e) => {
        e.preventDefault()
        const commentWithId = { ...inputText, movieId: id }
        createComment(commentWithId)
        setSendMsg(true)
        clearForm()
    }

    const clearForm = () => {
        setInputText({
            username: "",
            comments: "",
        })
    }
    return (
        <>
            <div className="contentForm">
                <h1 className="mt-5 text-light titleReview">Leave your review</h1>
                <form onSubmit={onSubmitInput}>
                    <div className="form-group" style={{ display: "flex", gap: "10px" }}>
                        <input
                            value={inputText.username}
                            name="username"
                            type="text"
                            onChange={handleChange}
                            className="form-control inputUserName"
                            placeholder="Insert your name"
                            style={{ flex: "1" }}
                            required />
                        <textarea
                            value={inputText.comments}
                            name="comments"
                            type="text"
                            onChange={handleChange}
                            required
                            className="form-control inputComment"
                            placeholder="Leave your comments about what you thought of the movie"
                            style={{ flex: "1" }} />
                        <p className="text-light mt-3">Select a file <br /> for share</p>
                        <input
                            className="inputFile"
                            type="file" name="myFile"
                            onChange={handleFileChange}
                            accept=".jpg, jpeg, .gif, .png"
                            maxSize={2097152} />
                    </div>
                    {sendMsg === false ?
                        <button type="submit">
                            Send
                        </button>
                        :
                        <p className="text-success mt-3">
                            Your comments were sent!
                        </p>
                    }
                </form>
            </div>
        </>

    )
}