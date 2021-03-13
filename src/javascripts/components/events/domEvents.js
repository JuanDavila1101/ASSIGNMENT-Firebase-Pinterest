// import { deleteBoard } from '../../helpers/data/boardsData';
import { showBoards } from '../forms/boards';
import { deleteBoardPins } from '../../helpers/data/boardPinsData';
import { showPins, emptyPins } from '../forms/pins';
import addBoardForm from '../forms/addBoardForm';
import { createBoard, getSingleBoard } from '../../helpers/data/boardsData';
import addPinForm from '../forms/addPinForm';
import formModal from '../forms/formModal';
import editPinForm from '../../helpers/data/editPinForm';
import {
  deletePin, getBoardPins, createPin, getSinglePin, updatePin
} from '../../helpers/data/pinsData';

const domEvents = (UID) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD PINS
    if (e.target.id.includes('delete-board')
        && window.confirm('Want to delete?')) {
      const boardID = e.target.id.split('--')[1];
      deleteBoardPins(boardID, UID).then((boardsArray) => showBoards(boardsArray));
    }

    // CLICK EVENT FOR DELETING A BOARD PINS
    if (e.target.id.includes('board-Pins')) {
      const boardID = e.target.id.split('--')[1];
      getBoardPins(boardID).then((pinsArray) => {
        if (pinsArray.length) {
          showPins(pinsArray);
        } else {
          emptyPins();
          getSingleBoard(boardID).then((boardArray) => showBoards(boardArray));
        }
      });
    }

    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin')
        && window.confirm('Want to delete?')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePin(firebaseKey).then((pinsArray) => showBoards(pinsArray));
    }

    // CLICK EVENT FOR ADDING A BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#title').value,
        imageURL: document.querySelector('#boardURL').value,
        UID,
      };

      createBoard(boardObject, UID).then((boardArray) => showBoards(boardArray));
    }
    // CLICK EVENT FOR ADDING A BOARD
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        boardID_firebaseKey: document.querySelector('#board').value.split(' ')[0],
        type: document.querySelector('#board').value.split(' ')[1],
        title: document.querySelector('#title').value,
        imageURL: document.querySelector('#pinURL').value,
        content: document.querySelector('#content').value,
      };

      createPin(pinObject).then((pinArray) => showBoards(pinArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR EDITING A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('#Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
      $('#modalForm').modal('toggle');
    }

    // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const bookObject = {
        boardID_firebaseKey: document.querySelector('#board').value,
        content: document.querySelector('#content').value,
        imageURL: document.querySelector('#image').value,
        type: document.querySelector('#type').checked,
      };
      updatePin(firebaseKey, bookObject).then((booksArray) => showPins(booksArray));
      $('#modalForm').modal('toggle');
    }
  });
};

export default domEvents;
