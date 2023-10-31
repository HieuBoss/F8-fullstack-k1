// Định nghĩa các phương thức api
import { config } from "./Config";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,

  setUrl: function (url) {
    this.serverApi = url;
  },

  send: async function (url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;
    const apikey = localStorage.getItem("apikey");

    const headers = {
      "Content-Type": "application/json",
    };

    if (apikey) {
      headers["X-Api-Key"] = apikey;
    }

    // console.log(headers);

    const options = {
      method,
      headers,
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    // console.log(response);
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      return { response, data };
    } catch (e) {
      console.log(e);
    }
  },

  get: function (url) {
    return this.send(url, "GET", null);
  },

  post: function (url, body = {}) {
    return this.send(url, "POST", body);
  },

  put: function (url, body = {}) {
    return this.send(url, "PUT", body);
  },

  patch: function (url, body = {}) {
    return this.send(url, "PATCH", body);
  },

  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
