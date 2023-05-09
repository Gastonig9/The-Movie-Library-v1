import React from 'react';
import "./CommentDetail.css"
import LikeCount from '../LikeCount/LikeCount';

function CommentDetail({ comment, onClose }) {
    return (
        <div className="msgContainDetail animate__animated animate__fadeInDown">
            <div className="userBrandDetail">
                <i className="far fa-user"></i>
                <span className="text-end bg-white p-3">{comment.username} says: </span>
            </div>
            <div className="commentBrandDetail">
                <p class="card-text"><small class="text-muted">Posted the day {comment.date}</small></p>
                <p>{comment.comments}</p>
                <img className="imgUserDetail" src={comment.file} alt="user send" />
                <hr />
                <LikeCount/>
            </div>
            <button className='buttonMsgDetail' onClick={onClose}>Close</button>
        </div>
    );
}

export default CommentDetail;