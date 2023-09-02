import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.APP_APIKEY,
    authDomain: process.env.APP_AUTHDOMAIN,
    projectId: process.env.APP_PROJECTID,
    storageBucket: process.env.APP_STORAGEBUCKET,
    messagingSenderId: process.env.APP_MESSASINGSPENDERID,
    appId: process.env.APP_ID,
    measurementId: process.env.APP_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app )

