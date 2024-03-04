import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVf8J7tlFwWDxGuv3Gw1mJw5VVwNQhyuU",
  authDomain: "testserver-d70a0.firebaseapp.com",
  databaseURL: "https://testserver-d70a0-default-rtdb.firebaseio.com",
  projectId: "testserver-d70a0",
  storageBucket: "testserver-d70a0.appspot.com",
  messagingSenderId: "916964314859",
  appId: "1:916964314859:web:b9581c52e3def203cb38ae"
  }
  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app);
export {database}