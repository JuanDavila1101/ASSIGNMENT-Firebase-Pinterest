const addBoardForm = () => {
  document.querySelector('#pins').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#boards').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="board">Board title</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter a Board's Title " required>
      </div>
      <div class="form-group">
        <label for="board">Board Image URL</label>
        <input type="text" class="form-control" id="boardURL" placeholder="Please enter an image URL" required>
      </div>
      <button type="submit" id="submit-board" class="btn btn-primary">Submit New Board</button>
    </form>`;
};

export default addBoardForm;
