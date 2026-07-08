// ==============================
// ELEMENTOS
// ==============================

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// ==============================
// TROCAR ENTRE LOGIN E CADASTRO
// ==============================

showRegister.addEventListener("click", function (e) {
    e.preventDefault();

    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});

showLogin.addEventListener("click", function (e) {
    e.preventDefault();

    registerForm.classList.remove("active");
    loginForm.classList.add("active");
});

// ==============================
// MOSTRAR / ESCONDER SENHA
// ==============================

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const input = button.parentElement.querySelector("input");
        const icon = button.querySelector("i");

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

});

// ==============================
// VALIDA EMAIL
// ==============================

function emailValido(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

// ==============================
// LOGIN
// ==============================

const loginFormulario = loginForm.querySelector("form");

loginFormulario.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginPassword").value.trim();

    if(email === "" || senha === ""){

        alert("Preencha todos os campos.");

        return;

    }

    if(!emailValido(email)){

        alert("Digite um e-mail válido.");

        return;

    }

    const botao = loginFormulario.querySelector(".btn-primary");

    botao.disabled = true;

    botao.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Entrando...';

    setTimeout(()=>{

        botao.disabled = false;

        botao.innerHTML = "Entrar";

        alert("Login realizado com sucesso! (simulação)");

    },1500);

});

// ==============================
// CADASTRO
// ==============================

const cadastroFormulario = registerForm.querySelector("form");

cadastroFormulario.addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmPassword").value;
    const termos = registerForm.querySelector(".terms input");
    if(nome === "" || email === "" || senha === "" || confirmar === ""){
        alert("Preencha todos os campos.");

        return;
    }

    if(!emailValido(email)){
        alert("Digite um e-mail válido.");
        return;
    }

    if(senha.length < 6){
        alert("A senha deve possuir pelo menos 6 caracteres.");
        return;
    }

    if(senha !== confirmar){
        alert("As senhas não coincidem.");
        return;
    }

    if(!termos.checked){
        alert("Você deve aceitar os termos.");
        return;
    }

    const botao = cadastroFormulario.querySelector(".btn-primary");
    botao.disabled = true;
    botao.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Criando conta...';

    setTimeout(()=>{

        botao.disabled = false;
        botao.innerHTML = "Criar Conta";
        alert("Conta criada com sucesso! (simulação)");
        cadastroFormulario.reset();
        registerForm.classList.remove("active");
        loginForm.classList.add("active");

    },1800);

});