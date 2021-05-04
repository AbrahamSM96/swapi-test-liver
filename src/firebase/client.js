import firebase from 'firebase'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2QjgVIrUF6vQUKkPLfVFK9ovyvz1cj4Q',
  authDomain: 'swappi-test-liver.firebaseapp.com',
  projectId: 'swappi-test-liver',
  storageBucket: 'swappi-test-liver.appspot.com',
  messagingSenderId: '412145739369',
  appId: '1:412145739369:web:6279881a10caf2dfca24f8',
  measurementId: 'G-53G2B938QK'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { photoURL, email, displayName, uid } = user
  return {
    avatar: photoURL,
    email: email,
    userName: displayName,
    uid
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(gmailProvider)
    .then((user) => {
      return mapUserFromFirebaseAuthToUser(user)
    })
}

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('Salir')
    })
    .catch((err) => {
      console.log(err)
    })
}
