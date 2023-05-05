import { useState, useEffect } from "react";
import "./LikeCount.css";

export default function LikeCount() {
  const [addLike, setAddLike] = useState(
    parseInt(localStorage.getItem("addLike")) || 0
  );
  const [restLike, setRestLike] = useState(
    parseInt(localStorage.getItem("restLike")) || 0
  );

  const addLikes = () => {
    setAddLike(addLike + 1);
  };

  const restLikes = () => {
    setRestLike(restLike + 1);
  };

  useEffect(() => {
    localStorage.setItem("addLike", addLike);
    localStorage.setItem("restLike", restLike);
  }, [addLike, restLike]);

  return (
    <>
      <div className="d-flex">
        <div onClick={addLikes} className="iconLike">
          <i className="far fa-thumbs-up"></i>
          <span>{addLike}</span>
        </div>
        <div onClick={restLikes} className="iconDislike">
          <i className="far fa-thumbs-down"></i>
          <span>{restLike}</span>
        </div>
        <div className="iconShare">
          <i className="fas fa-share"></i>
        </div>
      </div>
    </>
  );
}