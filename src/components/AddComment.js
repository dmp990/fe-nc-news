import React, { useContext, useState } from "react";
import { postCommentByArticleId } from "../api";
import { activeUsernameContext } from "../contexts/activeUsernameContext";

export default function AddComment({ article_id, setCommentAdded }) {
  const { activeUsername } = useContext(activeUsernameContext);

  const [comment, setComment] = useState("");
  const [posted, setPosted] = useState(false);
  const [status, setStatus] = useState("posted"); // posting, posted

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("posting");
    postCommentByArticleId(article_id, activeUsername, comment)
      .then((comment) => {
        console.log(comment.comment_id, " posted");
        setPosted(() => true);
        setStatus(() => "posted");
      })
      .catch(() => {
        setPosted(() => false);
        setStatus(() => "posted");
      });
  };

  if (activeUsername === "") {
    return <p className="error-msg">please log in to post a comment</p>;
  }
  if (posted) {
    setCommentAdded(() => true);
  }
  return (
    <article className="add-comment-container">
      <form className="add-comment-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Remember, be nice!"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          className="button-post-comment"
          disabled={status === "posting"}
        >
          post
        </button>
      </form>
      {posted ? <p>posted</p> : <></>}
    </article>
  );
}
