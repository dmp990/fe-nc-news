import React, { useState } from "react";
import { patchArticleById } from "../api";

export default function Vote({ votes, article_id }) {
  const [currVotes, setCurrVotes] = useState(votes);
  const [errorUpdatingVote, setErrorUpdatingVote] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div>
      <button
        className="thumbsup-button"
        onClick={() => {
          setCurrVotes((v) => v + 1);
          patchArticleById(article_id, 1)
            .then(() => {
              setErrorUpdatingVote(null);
              setHasVoted(true);
            })
            .catch((err) => {
              setHasVoted(false);
              setErrorUpdatingVote(err);
            });
        }}
        disabled={hasVoted}
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
              setHasVoted(true);
              setErrorUpdatingVote(null);
            })
            .catch((err) => {
              setHasVoted(false);
              setErrorUpdatingVote(err);
            });
        }}
        disabled={currVotes === 0 || hasVoted}
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
