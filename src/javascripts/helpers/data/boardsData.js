import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR BOARDS

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="UID"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// CREATE BOARD
const createBoard = (boardObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObject)
    .then((response) => {
      const body = { board_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards(uid).then((boardArray) => resolve(boardArray));
        });
    }).catch((error) => reject(error));
});

export {
  getBoards,
  deleteBoard,
  getSingleBoard,
  createBoard
};
