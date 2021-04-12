# Pinterest
Welcome to the Pinterest project board, where you have boards and pins that live on that board, you and create new board or create new pins for that board.
You can update a pin and make it live on a different board or change other fields like the pin’s picture or name.
You may also, delete a pin or delete a board deleting all the pin that belong to that board.

## Deployed site
## Deployed Netlify site: [Pinterest-deployed-site](https://juan-davila-firebase-pinterest.netlify.app/#)

## Loom Pinterest Video
### Loom Video: [Pinterest-video](https://www.loom.com/share/87c76c7f06b1414b8b754022efa2e0e1)

## Firebase Pinterest site Code
### GitHub Firebase Pinterest link [Firebase-Pinterest-GitHub_link](https://github.com/JuanDavila1101/ASSIGNMENT-Firebase-Pinterest)


### Assigment-Firebase-Pinterest
# Pinterest

Your team has been tasked with creating pinterest.  If you live under a rock and have never used pinterest before go figure out what it does. TLDR; users create boards and can pin urls to the boards

## Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

## HW Parts

### Part 1: ERDs and Authentication
* Create an ERD for pinterest (do this in studygroup)
* Clone this repo
* Create a setup branch
* Do all the stuff needed when setting up the project. Reference the webpack instructions if needed. These include making the updates to the `.env` file
  * Create a new firebase project, database, and enable google authentication, etc.
* Create an authentication branch and add a navbar with logout button, and place the google login button somewhere for you to test
  * **Note: There are components that you can use to get started and style later. We just want you to get your auth setup by yourself.**
* When your user is **logged out** they should see the navbar with only a brand.  And an h1 on the page that says PINTEREST (make a `home` component for this)
* When your user is logged in they should see a navbar with a brand and a logout button and an H1 on the page that says Boards (make a `boards` component for this)

### Part 2: READ
#### Setup
* Create some json data
* Import that data into firebase

#### User Stories
* As a user, when I am logged in and the page loads, I should see all the boards that belong to me.

* As a user, when I click on one of my boards, I should see a single board view that shows all pins for that board.

* As a user, when I am on the single board view, there should be some way to go back to all my boards.

### Part 3: DELETE
* As a user, I should be able to delete a pin from one of my boards.

* As a user, I should be able to delete one of my boards.

* As a user, when I delete one of my boards all pins that were on that board should be deleted as well.

### Part 4: CREATE
* As a user, I should be able to create a new pin.

* As a user, I should be able to create a new board.

### Part 5: UPDATE
* As a user, I should be able to change which board a pin belongs to.

### Part 6: Deploy and Readme
* As a user I should be able to use your app on the internet - it should be deployed using Netlify.

* As a developer, I want to see an amazing README for this project.
