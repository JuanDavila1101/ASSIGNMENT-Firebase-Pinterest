import { getBoards } from '../../helpers/data/boardsData';
import { showBoards, emptyBoards } from '../forms/boards';
import { getPins } from '../../helpers/data/pinsData';
import { showPins, emptyPins } from '../forms/pins';

// let boardOrPin = '';

const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  // document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });

  // ALL PINS
  document.querySelector('#show-pins').addEventListener('click', () => {
    getPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });
};

export default navigationEvents;
