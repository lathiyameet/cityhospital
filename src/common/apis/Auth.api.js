import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase';

export const singAPI = (values) => {
    console.log(values);
    return new Promise((resole, reject) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resole({ Message: "Signup", user });
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            reject(errorCode, errorMessage);
                            // ..
                        });
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject("Email already registar.");
                } else if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                    reject("please check your internet connection.");
                } else if (errorCode.localeCompare("auth/weak-password") === 0) {
                    reject("Your password is weak")
                }
                // ..
            });
    })

}

export const LoginAPI = (values) => {
    return new Promise((reslove, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 

                const user = userCredential.user;
                if (user.emailVerified) {
                    reslove({ message: 'login is successful' });
                    // localStorage.setItem("login", 'true')
                    // Navigate("/")
                } else {
                    reject({ message: 'please verified your Email' });
                }


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject("Email is not registar");
                } else if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject("Your password is wrong");
                } else if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                    reject("please check your internet connection.");
                }
            });
    })

}

export const ForgetAPI = (values) => {
    return new Promise((reslove, reject) => {
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                reslove("Forget password");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject("Email is not registar");
                } else if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                    reject("please check your internet connection.");
                }
            });
    })

}