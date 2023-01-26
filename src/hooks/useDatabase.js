import {get, getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";

const useDatabase = () => {

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    };

    const db = getDatabase(initializeApp(firebaseConfig))

    const getData = async () => {
        const portfolioDataRef = ref(db, '/')
        return get(portfolioDataRef).val()
    }

    return {
        getData
    }

}

export default useDatabase
