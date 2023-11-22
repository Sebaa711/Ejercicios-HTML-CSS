const containerLabel = document.querySelector("#title");

function changeDisabled(btn1, btn2) {
    if(btn1.classList.contains("disabled")){
        btn1.classList.remove("disabled");
        btn2.classList.add("disabled")
    } else return;
}

function loginTab() {
    containerLabel.innerText = "Iniciar Sesion"
    document.querySelectorAll((".register-needed")).forEach((node) => {
        node.style.display = "none";
    })
    document.querySelectorAll((".login-needed")).forEach((node) => {
        node.style.display = "";
    })
}

function registroTab() {
    containerLabel.innerText = "Registrarse"
    document.querySelectorAll((".login-needed")).forEach((node) => {
        node.style.display = "none";
    })
    document.querySelectorAll((".register-needed")).forEach((node) => {
        node.style.display = "";
    })
}

const signUpBTN = document.querySelector("#signUp");
signUpBTN.addEventListener('click', (e) => {
    registroTab();
    changeDisabled(e.target, document.getElementById("signIn"));
})

const signInBTN = document.querySelector("#signIn");
signInBTN.addEventListener('click', (e) => {
    loginTab();
    changeDisabled(e.target, document.getElementById("signUp"));
})