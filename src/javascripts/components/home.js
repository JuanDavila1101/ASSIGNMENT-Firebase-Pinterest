import domBuilder from './domBuilder';

const home = () => {
  domBuilder();
  document.querySelector('#navigation').innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Pinterest
  </a>
<div id="login-form-container"></div>
</nav>
    `;
};

export default home;
