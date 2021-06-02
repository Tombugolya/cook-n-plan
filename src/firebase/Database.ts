import firebase from 'firebase'

export default class Database {
  readonly #db: firebase.firestore.Firestore
  constructor(app: firebase.app.App) {
    this.#db = app.firestore()
  }
}
