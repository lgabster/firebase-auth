import { initializeApp } from "firebase/app"
import { getDatabase, get, set, ref, child } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { ref as vueRef } from 'vue'
import router from '../router'
import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then(({ user }) => {
      writeUserData(user.uid, { name: this.form.fullName, email: this.form.email})
  })

const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then(({ user }) => {
    readUserData(user.uid)
    localStorage.setItem('user', JSON.stringify(user))
    isAuthenticated.value = true
    return user
  })

const signOutUser = () => signOut(auth)
  .then(() => {
    console.log('Signed out successfully')
    localStorage.removeItem('user')
    isAuthenticated.value = false
    router.push('/login')
  }).catch(error => {
    console.log('Signed out FAILED')
    console.error(error)
  })

const writeUserData = (userId, {name, email}) => {
  return set(ref(database, 'users/' + userId), {
    name,
    email,
  }).catch(error => {
    console.error(error)
  })
}

const readUserData = (userId) => {
  get(child(ref(database), 'users/' + userId)).then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log('No data available')
    }
  }).catch(error => {
    console.error(error)
  })
}

const getAuthUser = () => {
  return localStorage.getItem('user')
}

const isAuthenticated = vueRef(false)

export {
  firebaseApp,
  database,
  auth,
  createUser,
  signIn,
  writeUserData,
  readUserData,
  signOutUser,
  getAuthUser,
  isAuthenticated
}
