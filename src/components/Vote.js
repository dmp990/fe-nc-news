import React, { useState } from "react";
import { patchArticleById } from "../api";

export default function Vote({ votes, article_id }) {
  const [currVotes, setCurrVotes] = useState(votes);
  const [errorUpdatingVote, setErrorUpdatingVote] = useState(null);

  return (
    <div>
      <button
        className="thumbsup-button"
        onClick={() => {
          setCurrVotes((v) => v + 1);
          patchArticleById(article_id, 1)
            .then(() => {
              setErrorUpdatingVote(null);
            })
            .catch((err) => {
              setErrorUpdatingVote(err);
            });
        }}
      >
        👍
      </button>
      {currVotes}
      <button
        className="thumbsup-button"
        onClick={() => {
          setCurrVotes((v) => v - 1);
          patchArticleById(article_id, -1)
            .then(() => {
              setErrorUpdatingVote(null);
            })
            .catch((err) => {
              setErrorUpdatingVote(err);
            });
        }}
        disabled={currVotes === 0}
      >
        👎
      </button>
      {errorUpdatingVote !== null ? (
        <p className="error-msg">Error updating votes</p>
      ) : (
        <></>
      )}
    </div>
  );
}
