import React, { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";

export default function ShowComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((response) => {
      setComments(() => response);
    });
  }, [article_id]);
  return (
    <article>
      {
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "hide " : "show "}comments
        </button>
      }
      {show ? (
        comments.map((comment) => {
          return (
            <section key={comment.comment_id} className={"comment-container"}>
              <p className="comment-body">{comment.body}</p>
              <p className="comment-author">By: {comment.author}</p>
              <p className="comment-created-at">
                On:{" "}
                {comment.created_at
                  ? comment.created_at.slice(0, 10) +
                    " " +
                    comment.created_at.slice(11, 19)
                  : comment.created_at}
              </p>
            </section>
          );
        })
      ) : (
        <></>
      )}
    </article>
  );
}
