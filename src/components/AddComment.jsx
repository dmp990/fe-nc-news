import React, { useContext, useState } from "react";
import { postCommentByArticleId } from "../api";
import { activeUsernameContext } from "../contexts/activeUsernameContext";
import ShowComments from "./ShowComments";

export default function AddComment({ article_id }) {
  const { activeUsername } = useContext(activeUsernameContext);

  const [comment, setComment] = useState("");
  const [posted, setPosted] = useState(false);
  const [status, setStatus] = useState("posted"); // posting, posted

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("posting");
    if (comment !== "") {
      postCommentByArticleId(article_id, activeUsername, comment)
        .then((comment) => {
          setPosted(() => true);
          setStatus(() => "posted");
          setComment("");
        })
        .catch(() => {
          setPosted(() => false);
          setComment("");
          setStatus(() => "posted");
        });
    }
  };

  if (activeUsername === "") {
    return (
      <>
        <p className="error-msg">please log in to post a comment</p>
        <section>
          <ShowComments article_id={article_id} status={status} />
        </section>
      </>
    );
  }

  return (
    <article className="add-comment-container">
      <form className="add-comment-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Remember, be nice!"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          required
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
      <ShowComments article_id={article_id} status={status} />
    </article>
  );
}
