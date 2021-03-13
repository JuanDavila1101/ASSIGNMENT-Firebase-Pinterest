import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#pins').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="pin">Pin title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter a Pin Title " required>
      </div>
      <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="pin">Pin Content</label>
        <input type="text" class="form-control" id="content" aria-describedby="pinContent" placeholder="Enter content for the Pin" required>
      </div>
      <div class="form-group">
        <label for="pin">Pin Image URL</label>
        <input type="text" class="form-control" id="pinURL" placeholder="Please enter an image URL" required>
      </div>
       <div class="form-group" id="select-board"></div>
      <button type="submit" id="submit-pins" class="btn btn-primary">Submit New Pin</button>
    </form>`;
  selectBoard();
};

export default addPinForm;
