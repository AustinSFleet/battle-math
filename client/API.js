import axios from "axios";

export default {
  // Gets all books
  login: function(loginData) {
    return axios.post("/api/login", loginData);
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  newUser function(newUserData) {
    return axios.post("/api/newUser", loginData);
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  update function(newUserData) {
    return axios.post("/api/newUser", updateData);
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

};
