// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { collection, getDocs, getFirestore, doc, getDoc, query, where } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYn7DI6NjkVsCkz8Eze4QKGIOE720dVvE",
  authDomain: "vanlife-da25e.firebaseapp.com",
  projectId: "vanlife-da25e",
  storageBucket: "vanlife-da25e.firebasestorage.app",
  messagingSenderId: "598537993686",
  appId: "1:598537993686:web:3ee5f2fe8d945a2d08b877",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");


/**
 * Fetches all vans from the 'vans' collection in Firestore
 * 
 * @async
 * @function getVans 
 * 
 * @returns  {Promise<Object>} A promise that resolves to an array of van objects.
 */
export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return vans;
}


/**
 * Fetches a single van by its ID from the 'vans' collection in Firestore
 * 
 * @async
 * @function getVan
 * 
 * @param {number} id - The unique identifier of the van 
 * @returns {Promise<Object>} - A promise that resolves to an object containing the van's data and its 'id' field.
 */
export async function getVan(id){
  const docRef = doc(db, 'vans', id)
  const snapshot = await getDoc(docRef)

  return {
    ...snapshot.data(), 
    id: snapshot.id
  }
}
/**
 * Fetches vans or specific van from the 'vans' collection in Firestore
 * 
 * @async
 * @function getHostVans 
 * 
 * @returns  {Promise<Object>} A promise that resolves to an array of van objects.
 */
export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return vans;
}



export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
