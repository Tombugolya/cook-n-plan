import firebase from 'firebase/app'
import 'firebase/firestore'

export default class Database {
  readonly #db: firebase.firestore.Firestore

  constructor(app: firebase.app.App) {
    this.#db = app.firestore()
  }

  public write({ collection, data }: DataWriteProps) {
    this.#db
      .collection(collection)
      .doc(data.id)
      .set(data)
      .then(this.handlers[collection].success)
      .catch(this.handlers[collection].error)
  }

  public getDoc({ collection, data }: DataWriteProps) {
    return this.#db.collection(collection).doc(data.id).get()
  }

  private handlers: Handlers = {
    [Collections.USERS]: {
      success: () => {},
      error: (err) => console.log(err),
    },
  }
}

export interface DataWriteProps {
  collection: Collections
  data: Data
}
export enum Collections {
  USERS = 'users',
}
export interface Data {
  id: string
}
export interface UserData extends Data {
  email: string
  fullName: string
}
interface StateHandlers {
  success: () => void
  error: (err: Event) => void
}
type Handlers = Record<Collections, StateHandlers>
