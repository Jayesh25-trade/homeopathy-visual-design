import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYaZiYP6gHWJOkVKeAosohc1QxoA2I2xA",
  authDomain: "dr-somani-homoeopathy.firebaseapp.com",
  projectId: "dr-somani-homoeopathy",
  storageBucket: "dr-somani-homoeopathy.firebasestorage.app",
  messagingSenderId: "1057922914842",
  appId: "1:1057922914842:web:26249d180b8d23efbc8fa3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
