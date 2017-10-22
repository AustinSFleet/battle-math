import axios from "axios";

export default {
  login: function(loginData) {
    return axios.post("/api/login", loginData)
  },

  newUser: function(newUserData) {
    return axios.post("/api/newUser", newUserData)
  },
  save: function(gameData){
    return axios.put("/api/save",gameData)
  } 
};

