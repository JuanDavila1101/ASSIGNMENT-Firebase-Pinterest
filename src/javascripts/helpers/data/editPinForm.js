import selectBoard from '../../components/forms/selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-Pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${pinObject.imageURL}">
      </div>
      <div class="form-group">
        <label for="price">Content</label>
        <input type="text" class="form-control" id="content" placeholder="Content" value="${pinObject.content}" required>
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <input type="text" class="form-control" id="type" placeholder="type" value="${pinObject.type}" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="update-pin--${pinObject.pinID_firebaseKey}" class="btn btn-success">Update Pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
