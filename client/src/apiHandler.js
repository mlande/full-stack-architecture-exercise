const axios = require("axios");


export function getAllArticles() {
    // get request to "/" gives me all the articles
    return axios.get("http://localhost:3000/").then(res => res.data)
}