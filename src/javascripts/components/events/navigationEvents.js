// import signOut from '../../helpers/signOut';
import getBoards from '../../helpers/data/boardsData';
import { showBoards, emptyBoards } from '../forms/boards';

const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  // document.querySelector('#logout-button').addEventListener('click', signOut);

  console.warn(uid);

  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    // GET ALL BOOKS on click
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
