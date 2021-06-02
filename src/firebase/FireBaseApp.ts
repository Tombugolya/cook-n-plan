import firebase from 'firebase'

export interface UserCredentials {
  email: string
  password: string
}

class FireBaseApp {
  private readonly config = {
    apiKey: 'AIzaSyCtnkJzP_S0ELAnS-OLvvQl3hJsOfPmlAE',
    authDomain: 'cook-n-plan.firebaseapp.com',
    projectId: 'cook-n-plan',
    storageBucket: 'cook-n-plan.appspot.com',
    messagingSenderId: '914265389121',
    appId: '1:914265389121:web:9a3312431fd5bc56b72ec0',
  }
  public readonly name = "Cook N' Plan"
  readonly #app: firebase.app.App
  readonly #auth: firebase.auth.Auth
  readonly #database: firebase.firestore.Firestore

  constructor() {
    this.#app = firebase.initializeApp(this.config, this.name)
    this.#auth = this.#app.auth()
    this.#database = this.#app.firestore()
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

export default new FireBaseApp()
