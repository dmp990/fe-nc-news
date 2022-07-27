const axios = require("axios");

const baseURL = "https://asads-news-server.herokuapp.com/api";

export const fetchUsers = () => {
  return axios
    .get(baseURL + "/users")
    .then((response) => {
      return response.data.users;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchTopics = () => {
  return axios
    .get(baseURL + "/topics")
    .then((response) => {
      return response.data.topics;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchArticles = (topic) => {
  return axios
    .get(baseURL + "/articles", { params: { topic: topic } })
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchArticleById = (id) => {
  return axios.get(baseURL + `/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

//PATCH /api/articles/:article_id"
export const patchArticleById = (id, vote) => {
  return axios
    .patch(baseURL + `/articles/${id}`, { inc_votes: vote })
    .then((response) => {
      return response.data.article;
    });
};

// GET /api/articles/:article_id/comments"
export const fetchCommentsByArticleId = (id) => {
  return axios.get(baseURL + `/articles/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};

// POST /api/articles/:article_id/comments"
/* examplePostBody": {
        "username": "butter_bridge",
        "body": "Hakuna Matata"
      },
*/

export const postCommentByArticleId = (id, username, body) => {
  return axios
    .post(baseURL + `/articles/${id}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    });
};
