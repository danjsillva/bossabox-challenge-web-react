import API from "../config/api";

export default {
  fetchTools: async ({ title = "", tag = "" }) => {
    try {
      let response = (await API.get(`/tools?title=${title}&tag=${tag}`)).data;

      return response;
    } catch (error) {
      console.error(error.response.data);

      return [];
    }
  },

  saveTool: async ({ data }) => {
    try {
      let response;

      if (!data.id) {
        response = (await API.post(`/tools`, data)).data;
      } else {
        response = (await API.put(`/tools/${data.id}`, data)).data;
      }

      return response;
    } catch (error) {
      console.error(error.response.data);

      return {};
    }
  },

  removeTool: async ({ id }) => {
    try {
      let response = (await API.delete(`/tools/${id}`)).data;

      return response;
    } catch (error) {
      console.error(error.response.data);

      return {};
    }
  }
};
