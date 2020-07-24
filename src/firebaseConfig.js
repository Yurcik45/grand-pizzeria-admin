import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlmbjprJ2UcszbjAsUVDldJ3NXo3cN8_k",
    authDomain: "grandepizzeria-d237f.firebaseapp.com",
    databaseURL: "https://grandepizzeria-d237f.firebaseio.com",
    projectId: "grandepizzeria-d237f",
    storageBucket: "grandepizzeria-d237f.appspot.com",
    messagingSenderId: "548276240806",
    appId: "1:548276240806:web:8dab365f16f3ece2414f67",
    measurementId: "G-4QXPY48ZVH"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase