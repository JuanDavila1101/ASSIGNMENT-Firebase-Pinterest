import logoutButton from '../logoutButton';
import domBuilder from '../domBuilder';
import navBar from '../navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { emptyPins, showPins } from '../forms/pins';
import { getPins } from '../../helpers/data/pinsData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getPins().then((pinsArray) => {
    if (pinsArray.length) {
      showPins(pinsArray);
    } else {
      emptyPins();
    }
  });
};

export default startApp;
