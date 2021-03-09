const showPins = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add a Pin</button>';

  array.forEach((item) => {
    document.querySelector('#pins').innerHTML += `
      <div class="card">
        <img class="card-img-top" src=${item.imageURL} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <button class="btn btn-danger" id="delete-pin--${item.pinID_firebaseKey}">Delete ${item.title} pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#pins').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
