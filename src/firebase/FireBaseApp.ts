import firebase from 'firebase'

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
  constructor() {
    this.#app = firebase.initializeApp(this.config, this.name)
  }
  public get app(): firebase.app.App {
    return this.#app
  }
}

export default new FireBaseApp()
