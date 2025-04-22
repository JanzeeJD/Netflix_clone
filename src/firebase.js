
import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import { 
  addDoc, 
  collection, 
  getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAivhTSvDsMDrzi39RhqR_dOkjQ41hIOpk",
  authDomain: "netflix-clone-260f4.firebaseapp.com",
  projectId: "netflix-clone-260f4",
  storageBucket: "netflix-clone-260f4.appspot.com",
  messagingSenderId: "816514931083",
  appId: "1:816514931083:web:1bf751c9541cf9637ab78e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db, "user",{
      uid:user.uid,
      name,
      authProvider: "local",
      email,
    }));
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async(email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth,db,login,signUp,logout};