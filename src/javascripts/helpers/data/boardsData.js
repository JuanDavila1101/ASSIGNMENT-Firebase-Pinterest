// import firebase from 'firebase/app';
// import firebase from 'firebase/app/';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR BOARDS

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
// TODO: Update this to only get the current logged in user's boards
const getBoards = (uid) => new Promise((resolve, reject) => {
  console.warn(`${dbUrl}/boards.json?orderBy="UID"&equalTo="${uid}"`);
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

export { getBoards, deleteBoard };
