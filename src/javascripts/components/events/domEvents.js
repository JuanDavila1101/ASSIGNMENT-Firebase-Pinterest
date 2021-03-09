// import { deleteBoard } from '../../helpers/data/boardsData';
import { showBoards } from '../forms/boards';
import { deletePin, getBoardPins } from '../../helpers/data/pinsData';
import { deleteBoardPins } from '../../helpers/data/boardPinsData';
import { showPins, emptyPins } from '../forms/pins';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD PINS
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Want to delete?')) {
        const boardID = e.target.id.split('--')[1];
        deleteBoardPins(boardID, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }
  });

  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD PINS
    if (e.target.id.includes('board-Pins')) {
      const boardID = e.target.id.split('--')[1];
      getBoardPins(boardID).then((pinsArray) => {
        if (pinsArray.length) {
          showPins(pinsArray);
        } else {
          emptyPins();
        }
      });
    }
  });

  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A pin
    if (e.target.id.includes('delete-pin')
        && window.confirm('Want to delete?')) {
      const firebaseKey = e.target.id.split('--')[1];
      // we get the second element in the array
      deletePin(firebaseKey).then((pinsArray) => showBoards(pinsArray));
    }
  });
};

export default domEvents;
