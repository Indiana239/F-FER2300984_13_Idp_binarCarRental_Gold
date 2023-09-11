import Request from "../api";

const Car = {
  async get(url) {
    const response = await Request.get(url);
    return response;
  },
};

export default Car;
