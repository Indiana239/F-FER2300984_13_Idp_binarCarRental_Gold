import Request from "../api";

const Auth = {
  async post(url, data) {
    const response = await Request.post(url, data);
    return response;
  },
};

export default Auth;
