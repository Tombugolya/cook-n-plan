import firebase from 'firebase/app'
import Auth from './Auth'
import Database from './Database'

export interface UserCredentials {
  email: string
  password: string
}

class FireBaseApp {
  public readonly name = "Cook N' Plan"
  readonly #app: firebase.app.App
  readonly #auth: Auth
  readonly #database: Database
  readonly #config = {
    apiKey: 'AIzaSyCtnkJzP_S0ELAnS-OLvvQl3hJsOfPmlAE',
    authDomain: 'cook-n-plan.firebaseapp.com',
    projectId: 'cook-n-plan',
    storageBucket: 'cook-n-plan.appspot.com',
    messagingSenderId: '914265389121',
    appId: '1:914265389121:web:9a3312431fd5bc56b72ec0',
  }

  constructor() {
    this.#app = firebase.initializeApp(this.#config, this.name)
    this.#auth = new Auth(this.#app)
    this.#database = new Database(this.#app)
  }

  public signUp = (cred: UserCredentials) => this.#auth.signUp(cred)
  public signIn = (cred: UserCredentials) => this.#auth.signIn(cred)
  public signOut = () => this.#auth.signOut()
}

export default new FireBaseApp()
