import firebase from 'firebase/app'
import 'firebase/auth'
import { UserCredentials } from './FireBaseApp'

export default class Auth {
  readonly #auth: firebase.auth.Auth

  constructor(app: firebase.app.App) {
    this.#auth = app.auth()
  }

  public signUp = ({ email, password }: UserCredentials) => {
    this.#auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // New user flow
        console.log(userCredential.user)
      })
  }

  public signIn = ({ email, password }: UserCredentials) => {
    this.#auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Log in flow
        console.log(userCredential.user)
      })
  }

  public signOut = () => {
    this.#auth.signOut().then(() => {
      // Sign out flow
      console.log('Sign out flow')
    })
  }
}
