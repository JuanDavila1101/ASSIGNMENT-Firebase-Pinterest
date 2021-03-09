const showBoards = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add a Board</button>';

  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `
      <div class="card">
        <img class="card-img-top" src=${item.imageURL} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <button class="btn btn-danger" id="delete-board--${item.board_firebaseKey}">Delete boards</button>
        <button class="btn btn-danger" id="board-Pins--${item.board_firebaseKey}">See my pins</button>
        </div>
      </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
