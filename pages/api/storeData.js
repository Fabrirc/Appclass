import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import Submitmeme from "../../components/Submitmeme";

const firebaseConfig = {
  apiKey: "AIzaSyDddG9ZXi_-5NawFTO_xh5rsHm9Sp1chUc",
  authDomain: "learningapp-67898.firebaseapp.com",
  projectId: "learningapp-67898",
  storageBucket: "learningapp-67898.appspot.com",
  messagingSenderId: "20235147431",
  appId: "1:20235147431:web:c6bef2870c0a68baec2382",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const notasCollectionRef = collection(database, "notas");

export default async function storeData(req, res) {
  if (req.method === "POST") {
    addDoc(notasCollectionRef, req.body);
    res.status(200);
  } else {
    const data = await getDocs(notasCollectionRef);
    const dataObject = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    res.status(200).json(dataObject);
  }
}
