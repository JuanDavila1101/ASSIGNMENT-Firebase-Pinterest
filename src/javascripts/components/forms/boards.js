const showBoards = (array) => {
  // document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';

  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `
      <div class="card">
        <img class="card-img-top" src=${item.imageURL} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <button class="btn btn-danger" id="see-board-Pins--${item.board_firebaseKey}">See my pins</button>
        </div>
      </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Items</h1>';
};

export { showBoards, emptyBoards };
