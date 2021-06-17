import firebase from 'firebase/app'
import 'firebase/auth'
import Database, { Collections, UserData } from './Database'
import { UserCredentials, UserInfo } from './FireBaseApp'

export default class Auth {
  readonly #auth: firebase.auth.Auth
  readonly #db: Database
  constructor(app: firebase.app.App, db: Database) {
    this.#auth = app.auth()
    this.#db = db
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
        this.#db.write({ collection, data })
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
        this.#db
          .getDoc({ collection, data: { id } })
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

  public getUser(): firebase.User | null {
    let user: firebase.User | null = null
    this.#auth.onAuthStateChanged((val) => {
      user = val
    })
    return user
  }

  private errorHandlers = {
    signUp: (err: ErrorEvent) => console.log(err),
    signIn: (err: ErrorEvent) => console.log(err),
    signOut: (err: ErrorEvent) => console.log(err),
  }

  public setOnAuthStateChange = (handler: (a: firebase.User) => any) =>
    this.#auth.onAuthStateChanged(handler)
}
