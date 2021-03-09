import { deleteBoard, getSingleBoard } from './boardsData';
import { deletePin, getBoardPins } from './pinsData';

// DELETE AUTHORS AND ALL BOOKS --- PATERN       BOOKS = PINS
// DELETE BOARD AND ALL PINS
// Delete books is an array
const deleteBoardPins = (boardID, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardID).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.pinID_firebaseKey));
    console.warn(deletePins);
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardID, uid)));
  }).catch((error) => reject(error));
});

// AUTHOR = BOARD
const boardPinsInfo = (boardID) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardID);
  const boardPins = getBoardPins(boardID);
  console.warn(board, boardPins);
  Promise.all([board, boardPins])
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinsInfo };
