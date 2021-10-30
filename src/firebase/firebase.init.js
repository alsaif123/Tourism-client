import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const intializeAuthentication = () => {
       initializeApp(firebaseConfig);
}
export default intializeAuthentication;