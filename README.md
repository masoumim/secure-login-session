# secure-login-session

A minimal app that demonstrates secure registration, login, persistent login session and hashing of passwords.

https://secure-login-session.herokuapp.com/register


# Project technical stack and Libraries:

Language: Node.js / JavaScript

Framework: Express.js

Database: PostgreSQL / Heroku

Passport.js: Authentication middleware for Node.js, used for authenticting users at login

bcrypt: A password-hashing function, used to hash and salt plaintext passwords before they are saved to database

dotenv: Loads environment variables from .env file, used for storing database connection string and cookie secret

Express-PG: A collection of node.js modules for interfacing with the PostgreSQL database

Express-Session: Session middleware for Express, used for creating user login sessions and sending secure cookie to client

Connect-pg-simple: A minimal PostgreSQL session store for Connect/Express, used to save user session data

EJS Template Engine: A simple templating language that lets you generate HTML markup with plain JavaScript

# Project info:

This project demonstrates secure registration, login and web sessions. Users can register with the app by entering a name and password. In the registration process, the plaintext password is first hashed / salted before being saved to a PostgreSQL database. When a user logs in, their plaintext password is compared to the stored password hash. Bcrypt pulls the salt out of stored hash in the database, hashes the retrieved password and finally performs the comparison. Next, a web session is created and a cookie is sent to the client. The session and cookie data is saved to the database to allow for a persistent login.

To access the app, navigate to https://secure-login-session.herokuapp.com/register

# Endpoints:

Base URL: https://secure-login-session.herokuapp.com

Login: https://secure-login-session.herokuapp.com/login

Register: https://secure-login-session.herokuapp.com/register

Profile: https://secure-login-session.herokuapp.com/profile


