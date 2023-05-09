import "./MovieComments.css"
import React, { useState, useEffect } from 'react';
import { getComment } from '../../services/firestore'
import { useParams } from "react-router-dom";
import LikeCount from "../LikeCount/LikeCount";
import CommentDetail from "../CommentDetail/CommentDetail";

export default function MovieComments() {
    const [comment, setComment] = useState([])
    const [selectedComment, setSelectedComment] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        async function fetchComments() {
            const commentsData = await getComment(id);
            setComment(commentsData);
        }
        fetchComments();
    }, [id]);

    const handleClickComment = (comment) => {
        setSelectedComment(comment);
    }

    const handleCloseComment = () => {
        setSelectedComment(null);
    }

    return (
        <>
            {selectedComment && <CommentDetail comment={selectedComment} onClose={handleCloseComment} />}
            {comment.length === 0 ? (
                <div className="commentsContainer">
                    <h1 className="text-light mt-3 commentsTitle">Feedback</h1>
                    <div className="alert alert-dark" role="alert">
                        <h1>No Comments Here</h1>
                    </div>
                </div>
            ) : (
                <div className="commentsContainer">
                    <h1 className="text-light mt-3 commentsTitle">Feedback</h1>
                    {comment.map((element) => (
                        <div class="alert alert-dark" role="alert">
                            <div className="msgContain">
                                <div className="userBrand">
                                    <i className="far fa-user"></i>
                                    <span className="text-end">{element.username} says: </span>
                                </div>
                                <div onClick={() => handleClickComment(element)} className="commentBrand">
                                    <p class="card-text"><small class="text-muted">Posted the day {element.date}</small></p>
                                    <p>{element.comments}</p>
                                    <img className="imgUser" src={element.file} alt="user send" />
                                    <hr />
                                    <LikeCount />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
