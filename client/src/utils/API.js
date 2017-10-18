import axios from "axios";

export default {
  login: function(loginData) {
    return axios.post("/api/login", loginData)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  newUser: function(newUserData) {
    return axios.post("/api/newUser", newUserData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
