import React from "react";

export default function ArticleCard({
  title,
  author,
  created_at,
  topic,
  comment_count,
  votes,
}) {
  return (
    <div className="article_card">
      <div className="article_card_title">{title}</div>
      <div className="article_card_author">By: {author}</div>
      <div className="article_card_created_at">Created on: {created_at}</div>
      <div className="article_card_topic">Topic: {topic}</div>
      <div className="article_card_comment_count">Comments: {comment_count}</div>
      <div className="article_card_votes">Votes: {votes}</div>
    </div>
  );
}
