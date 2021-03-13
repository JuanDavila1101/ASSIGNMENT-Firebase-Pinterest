import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR PINS

const dbUrl = firebaseConfig.databaseURL;

// GET PINS
const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET BOARD PINS
const getBoardPins = (boardID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="boardID_firebaseKey"&equalTo="${boardID}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE PIN
const deletePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins().then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

// CREATE PIN
const createPin = (pinObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { pinID_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins().then((pinArray) => resolve(pinArray));
        });
    }).catch((error) => reject(error));
});

// Get Single PIN
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE PIN
const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => getPins()).then((pinsArray) => resolve(pinsArray))
    .catch((error) => reject(error));
});

export {
  getPins, getBoardPins, deletePin, createPin, getSinglePin, updatePin
};
