import { initializeApp } from "firebase/app";
import {getAuth,  
  signInWithPopup, 
  GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword} from "firebase/auth";
  import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAhJbHP36XF9volJSXRsDeHetV_JRzrB40",
    authDomain: "crwn-clothing-db-8d893.firebaseapp.com",
    projectId: "crwn-clothing-db-8d893",
    storageBucket: "crwn-clothing-db-8d893.appspot.com",
    messagingSenderId: "762199982549",
    appId: "1:762199982549:web:50ff03beec1b4b61edbd5c"
  };
  
  const firebseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  })
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const database = getFirestore();
export const UserDocumnetfromAuth = async (userAuth, additionalInformation = {}) =>{
  if(!userAuth) return;
  const userdocRef = doc(database, 'users', userAuth.uid);
  console.log(userdocRef);

  const usersnapshot = await getDoc(userdocRef);
  console.log(usersnapshot);
  console.log(usersnapshot.exists());


  if(!usersnapshot.exists()){
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try {
    await setDoc(userdocRef,{
      displayName, email, createdAt, ...additionalInformation
    })
  } catch (error) {
    console.log('error creating the user', error.message);
  }
  }
  return userdocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) =>{
   if(!email || ! password) return; 
   return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) =>{
  if(!email || ! password) return; 
  return createUserWithEmailAndPassword(auth, email, password);
};