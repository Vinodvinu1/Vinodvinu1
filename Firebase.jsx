import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB_pqZhkMYGd0TO_8T6jsyERCUF27eWRcc",
  authDomain: "transportsys-47459.firebaseapp.com",
  projectId: "transportsys-47459",
  storageBucket: "transportsys-47459.appspot.com",
  messagingSenderId: "461164022224",
  appId: "1:461164022224:web:3f8b86be99833902c491d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;