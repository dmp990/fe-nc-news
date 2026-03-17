import React, { useContext, useEffect, useState } from "react";
import { deleteCommentByCommentId, fetchCommentsByArticleId } from "../api";
import { activeUsernameContext } from "../contexts/activeUsernameContext";
import Loading from "./Loading";

export default function ShowComments({ article_id, status }) {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState("deleted"); // deleting, deleted
  const [loading, setLoading] = useState(true);

  const { activeUsername } = useContext(activeUsernameContext);

  useEffect(() => {
    setLoading(true);
    fetchCommentsByArticleId(article_id).then((response) => {
      setLoading(false);
      const sorted = response.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setComments(() => sorted);
    });
    if (deletionStatus === "deleted") {
      fetchCommentsByArticleId(article_id).then((response) => {
        setLoading(false);
        const sorted = response.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setComments(() => sorted);
      });
    }
  }, [article_id, status, deletionStatus]);

  useEffect(() => {
    if (status === "posted") {
      setShow(true);
    }
  }, [status]);

  const handleDeletion = (comment_id) => {
    setDeletionStatus("deleting");
    deleteCommentByCommentId(+comment_id).then(() => {
      setDeletionStatus("deleted");
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <article className="all-comments">
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
                {comment.author === activeUsername ? (
                  <button
                    className="delete-btn"
                    type="button"
                    onClick={() => {
                      handleDeletion(comment.comment_id);
                    }}
                    disabled={deletionStatus === "deleting"}
                  >
                    delete
                  </button>
                ) : (
                  <></>
                )}
              </section>
            );
          })
        ) : (
          <></>
        )}
      </article>
    </section>
  );
}
