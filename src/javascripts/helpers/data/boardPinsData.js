import { deleteBoard, getSingleBoard } from './boardsData';
import { deletePin, getBoardPins } from './pinsData';

// DELETE BOARD AND ALL PINS
const deleteBoardPins = (boardID, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardID).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.pinID_firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardID, uid)));
  }).catch((error) => reject(error));
});

const boardPinsInfo = (boardID) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardID);
  const boardPins = getBoardPins(boardID);
  Promise.all([board, boardPins])
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinsInfo };
