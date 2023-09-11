import http from "./config";

const Request = {
  async get(url) {
    const response = await http.get(url);
    return response.data;
  },

  async post(url, data) {
    const response = await http.post(url, data);
    return response.data;
  },

  async put(url, data) {
    const response = await http.put(url, data);
    return response.data;
  },

  async delete(url) {
    await http.delete(url);
  },
};

export default Request;
