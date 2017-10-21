import axios from "axios";

export default {
  login: function(loginData) {
    return axios.post("/api/login", loginData)
  },

  newUser: function(newUserData) {
    return axios.post("/api/newUser", newUserData)
  },

  update: function(updateData) {
    return axios.post("/api/newUser", updateData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

};
