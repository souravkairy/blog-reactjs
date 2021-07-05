import axios from 'axios';
import React, { Component } from 'react'


class RestClient {
  static GetRequest=(getUrl)=>{
    return axios.get(getUrl).then(response => {
      return response.data
    }).catch(error => {
      return null
    })
  }


  static PostRequest=(postUrl,postJson)=>{
    let Config = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded',}
    }

    return axios.post(postUrl,postJson,Config).then(response => {
      return response.data
    }).catch(error => {
      return null
    })
  }
  
}
export default RestClient;
