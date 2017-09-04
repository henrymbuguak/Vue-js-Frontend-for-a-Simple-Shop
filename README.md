# frontend

> A Vue.js project


## Introduction

This is a frontend project created using vue js. In order to use this project you need the backend for the api connection. To get the backend code visit <a href="https://github.com/henrymbuguak/Laravel-5.4-Vue-Js-Backend/">Laravel backend</a>

## Explanation

In order for you to successfully run this app. You to run the backend of this application. Before you can login, you need to login to you database. Locate the oauth_clients table and copy Grant client secret key. Back at our frontend open login.vue located at src/components/authentication/Login.vue In our signin method, paste the client_secret that copied from the database.

Lastly, head over to the database and copy the crediatial of one user




## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```




For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
