# frontend

> A Vue.js project


## Introduction

This is a frontend project created using vue js. In order to use this project you need the backend for the api connection. To get the backend code visit <a href="https://github.com/henrymbuguak/Laravel-5.4-Vue-Js-Backend/">Laravel backend</a>

## Explanation

In order for you to successfully run this app. You need to run the backend of this application. Before you can login, you need to login to you database. Locate the oauth_clients table and copy Grant client secret key. Back at our frontend open <a href="https://github.com/henrymbuguak/Vue-js-Frontend-for-a-Simple-Shop/blob/master/src/components/authentication/Login.vue">Login.vue</a> located at src/components/authentication/Login.vue In our signin method, paste the client_secret that you copied from the database.

Lastly, head over to the database and copy the crediatial of one user, all you need is the email of the user and the password is <b>secret</b> for all seeded users. To start our frontend application run the following command:<b>npm run dev</b> and visit localhost:8080 signin and enjoy.

<p align="center">Happy Coding!</p>
