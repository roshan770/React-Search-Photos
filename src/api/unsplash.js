import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 53c9IgQO4um-qYiJNhrH5rtl7qLgahpU0Beuz7jUl0o",
  },
});
