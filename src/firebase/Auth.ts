import firebase from 'firebase/app'
import 'firebase/auth'
import FireBaseApp, { UserCredentials, UserInfo } from './FireBaseApp'
import { Collections, UserData } from './Database'

export default class Auth {
  readonly #auth: firebase.auth.Auth

  constructor(app: firebase.app.App) {
    this.#auth = app.auth()
  }

  public signUp = ({ email, password, fullName }: UserInfo) => {
    this.#auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signup Flow
        console.log(userCredential.user)
        const id = userCredential.user!.uid
        const collection: Collections = Collections.USERS
        const data: UserData = { id, email, fullName }
        FireBaseApp.write({ collection, data })
      })
      .catch(this.errorHandlers.signUp)
  }

  public signIn = ({ email, password }: UserCredentials) => {
    this.#auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login flow
        console.log(userCredential.user)
        const id = userCredential.user!.uid
        const collection: Collections = Collections.USERS
        FireBaseApp.getDoc({ collection, data: { id } })
          .then((doc) => {
            if (!doc.exists) return
            const user = doc.data()
            console.log(user)
          })
          .catch(this.errorHandlers.signIn)
      })
      .catch(this.errorHandlers.signIn)
  }

  public signOut = () => {
    this.#auth
      .signOut()
      .then(() => {
        // Sign out flow
        console.log('Sign out flow')
      })
      .catch(this.errorHandlers.signOut)
  }

  private errorHandlers = {
    signUp: (err: Event) => console.log(err),
    signIn: (err: Event) => console.log(err),
    signOut: (err: Event) => console.log(err),
  }
}
