interface AuthForm {
    name : string,
    submitButtonText:string,
    onReset : (e : any) => void,
    onSumbit : (e : any) => void
}

const loginForm : AuthForm = {
    name : "Login form",
    submitButtonText :"Login",
    onReset: (e) => {

    },
    onSumbit : (e) => {

    }
}

console.log(loginForm);