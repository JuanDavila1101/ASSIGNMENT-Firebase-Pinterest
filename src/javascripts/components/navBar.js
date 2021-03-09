const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Pinterest
  </a>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#" id="all-pins">Home<span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#" id="all-boards">Boards</a>
      <a class="nav-link" href="#" id="show-pins">Pins</a>
    </div>
  </div>
<div id="login-form-container"></div>
</nav>
    `;
};

export default navBar;
