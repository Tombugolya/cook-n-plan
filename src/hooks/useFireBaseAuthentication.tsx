import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import FireBaseApp from '../firebase/FireBaseApp'

const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState<firebase.User>(null)
  useEffect(() => {
    const unListen = FireBaseApp.setOnAuthStateChange(
      (authUser: firebase.User) =>
        authUser ? setAuthUser(authUser) : setAuthUser(null)
    )
    return () => {
      unListen()
    }
  })
  return authUser
}

export default useFirebaseAuthentication
