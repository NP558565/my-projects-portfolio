
## 100devs project -Build a Full stack App - Amazon Clone

This is a project in React where it mimics the stylized interface to look like the Amazon.com, using Firebase and Stripe services.Deployed on Firebase.

## [Live Demo of Amazon clone app](https://challenge-d310a.web.app/)

Deployed on Firebase

## Start template how to build the App

- npx create-react-app amazon-clone
- Then go firebase create a new project
- cd to correct folder `cd amazon-clone`
- `npm start`
- go firebase then create web app
- In local console `npm install -g firebase-tools`
- create `firebase.js` in `src`
- Select config and paste snippet code of Firebase SDK in to `firebase.js`
- remove App.test.js, logo.svg, setupTests.js
- go App.js remove all thing under also include <header> and import logo part
- remove all in `App.css`
- go `index.css` select \* set margin to 0
- create Header.js and type rfce
- [material-ui](https://material-ui.com/)
- install material-UI `npm install @material-ui/core`
- `npm install @material-ui/icons`
- `npm install react-router-dom`
- `npm i react-currency-format`
- build the price total counter and basket checkout with remove function
- build Authentication by firebase, 1st layout
- go to Authentication in firebase enable sign in method email
- open new terminal `cd amazon-clone` folder and `npm i firebase`
- `import firebase from "firebase";` in firebase.js
- done sign in & out page and User Authentication
- deploy online
- `firebase login` to login firebase
- `firebase init` then select `hosting` -> use an existing project -> (public) build
- `npm run build` create production build, if make any changes in app you have run this again
- `firebase deploy`
- Homework day 3:
  1. Add in the message to say ‘Hey [your email]’ on the Header Component.
  2. Deploy to firebase
  3. Add animations i.e. React Flip Move [react flip move](https://github.com/joshwcomeau/react-flip-move) add on checkout basket page
- Day 4 stripe functionality
- checkout page (payment page) with stripe frontend
- Cloud function to process stripe payment (serverless)
- Firebase for real-time database (Firestore)
- MERN stack
- Build the "my order" page
- Store orders for logged in user
- cd amazon-clone and `npm i @stripe/stripe-js` & `npm i @stripe/react-stripe-js`
- Blaze plan on firebase
- create stripe account and get test API key
- `npm i axios`
- `firebase init` -> function -> JS
- src is app (front-end), functions (full back-end)
- `cd functions` -> index.js to build a express app host on cloud function
- `npm i express`, `npm i cors`, `npm i stripe`
- copy secret key from stripe
- `firebase emulators:start`
- click functions[api] and emulator UI
- card number enter 424242....
- check payment in stripe that you receive the money
- push order into database, go firebase -> cloud firestore -> test mode
- `cd amazon-clone`, `npm install moment`
- `firebase deploy --only functions` only deploy the functions (back-end)
- see spark on bottom of firebase page, select Blaze
- then go firebase -> Functions grab the api link inside paste into axios
- cd to amazon-clone: `npm run build`
- `firebase deploy --only hosting`