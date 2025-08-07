import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = (email, password, setErrorMessage) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //console.log(userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMessage(errorCode + "-" + errorMessage);
    })
};
