## 🎮 Ghost Writer 👻

A text based game made using the MERN stack.

<br>

## 📖 Table of Contents
- About
- Gameplay
- Installation
- License

<br>

## 📌 About 

**Ghost Writer** is a text based game where you must type the word that appears on screen before the ghost reaches you. Designed using the MERN stack, the game is meant as a learning project for getting familiar with the technology suite.

<br>

## 🕹️ Gameplay
- Enter a name to start the game.
- Game starts as soon as you enter the first word (must press Enter key)
- You get 3 lives before Game Over.
- If the ghost touches you before you can type the word, you lose a life.


<br>

## 🚀 Installation

Option 1: Play the Web Build <br>
👉 [**Play Now**](https://ghostwritergame.netlify.app/)

Option 2: Run in localhost
- Clone this repo
- Create a .env file in Game/server folder with
  ```
  PORT = <port number>
  MONGO_URI =  <your mongoDB uri>
  ```
- Run the backend (Game/server)
  ``` bash
  npm install
  npm start
  ```
- Change the api within Game/client/services/api.js
  ```
  const API_URL = "<your backend localhost base url>";
  ```
- Run the frontend (Game/client)
  ``` bash
  npm install
  npm run dev
  ```

<br>

## 📄 License
MIT ©  [**Chris Maharjan**](www.linkedin.com/in/chris-maharjan-4b2580283)
