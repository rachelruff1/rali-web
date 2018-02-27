import { auth } from "../fire";

export const GET_USER = "get_user";

export function getUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: "GET_USER",
        payload: user
      });
    });
  };
}

export default function(state = { loading: true }, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
// btnLogin.addEventListener("click", e => {
//   const email = txtEmail.value;
//   const pass = txtPassword.value;

//   auth.signInWithEmailAndPassword(email, pass);
//   promise.catch(e => console.log(e.message));
// });

// btnSignUp.addEventListener("click", e => {
//   const email = txtEmail.value;
//   const pass = txtPassword.value;
//   //check for real email
//   auth.createUserWithEmailAndPassword(email, pass);
//   promise.catch(e => console.log(e.message));
// });

// firebase.auth().onAuthStateChanged(firebaseUser => {
//   if (firebaseUser) {
//     console.log(firebaseUser);
//   } else {
//     console.log("not logged in");
//   }
// });

// btnLogout.addEventListener('click', e => {
//     firebase.auth().signOut();
// });



// componentDidMount() {
//     firebase.auth().onAuthStateChanged((result) => {
//       if (result) {
//         this.setState({ userid: result.uid, checkAuth: true });
//       } else {
//         this.setState({ checkAuth: true });
//       }
//     });
//   }