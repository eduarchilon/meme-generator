import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB-jk5tbCktwzf3DPH1dr7M5vZFuwW9V78",
    authDomain: "meme-generator-eduar.firebaseapp.com",
    projectId: "meme-generator-eduar",
    storageBucket: "meme-generator-eduar.appspot.com",
    messagingSenderId: "520495245977",
    databaseURL: "gs://meme-generator-eduar.appspot.com/",
    appId: "1:520495245977:web:bbbd86f0220105eb22a608",
    measurementId: "G-LNZDKQ193C"
  };
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
const storage = getStorage();

window.onload = function (){
    //SUBO EL ARCHIVO AL STORAGE DE FIREBASE
    const upload = async({ file }) =>{
        //1. Referencia al espacio donde estara el archivo en el bucket
        const storageRef = ref(storage, `images/${file.name}`);
        //2. Subir el archivo
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }


    //ENVIO DEL FORMULARIO
    let form = document.querySelector("#uploader");
    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        let fileInput = form.querySelector("#file")
        let fileUp = fileInput.files[0];
        console.log(fileUp);
        upload({
            file: fileUp
        });
    });
    

}