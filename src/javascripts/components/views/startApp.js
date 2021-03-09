// import { emptyBooks, showBooks } from '../components/books';
import logoutButton from '../logoutButton';
import domBuilder from '../domBuilder';
import navBar from '../navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
// import { getBooks } from '../helpers/data/bookData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // getBooks(userObject.uid).then((booksArray) => {
  //   if (booksArray.lenght) {
  //     showBooks(booksArray);
  //   } else {
  //     emptyBooks();
  //   }
  // });
};

export default startApp;
