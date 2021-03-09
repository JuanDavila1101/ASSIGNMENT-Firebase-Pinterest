const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="pins"></div>
    <div id="boards"></div>
  </div>`;
};

export default domBuilder;
