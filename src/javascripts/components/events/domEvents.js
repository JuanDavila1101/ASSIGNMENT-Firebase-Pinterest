import { deleteBoard } from '../../helpers/data/boardsData';
import showBoards from '../forms/boards';

const domEvents = (uid) => {
  // console.warn(uid);
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        // we get the second element in the array
        deleteBoard(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }
  });
};

export default domEvents;
