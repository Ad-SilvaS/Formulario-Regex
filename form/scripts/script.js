const forms = document.getElementById("form");
const nameIpt = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const cpf = document.getElementById("cpf");
const password = document.getElementById("password");
const confPassword = document.getElementById("conf-password");

cpf.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 0) {
        v = v.substring(0, 11);

        v = v.replace(/(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/, function (match, g1, g2, g3, g4) {
            let formatted = g1;
            if (g2) formatted += `.${g2}`;
            if (g3) formatted += `.${g3}`;
            if (g4) formatted += `-${g4}`;

            return formatted;
        });
    };

    e.target.value = v;
});

phone.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 0) {
        v = `(${v.substring(0, 2)}${v.length > 2 ? ") " : ""}${v.substring(2, 7)}${v.length > 7 ? "-" : ""}${v.substring(7, 11)}`;
    }

    e.target.value = v;
});

document.querySelectorAll(".icon").forEach(i => {
    i.addEventListener("click", function () {
        const input = this.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            this.classList.replace("fa-eye", "fa-eye-low-vision");
        }
        else {
            input.type = "password";
            this.classList.replace("fa-eye-low-vision", "fa-eye");
        }
    });
});

forms.addEventListener("submit", (e) => {
    nameValue = nameIpt.value.trim();
    nameRegex = /^(?!\s)[A-ZÀ-Ü][a-zà-ü']+(?:[ \-'][a-zà-ü']+)*(?<!\s)$/;
    if (!nameRegex.test(nameValue) || nameValue.length < 7) {
        e.preventDefault();
        alert("Nome Inválido!")
        nameIpt.classList.add("invalid");
    }
    else {
        nameIpt.classList.remove("invalid");
    }

    emailValue = email.value.trim();
    emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(emailValue)) {
        e.preventDefault();
        alert("Email inválido!")
        email.classList.add("invalid");
    }
    else {
        email.classList.remove("invalid");
    }

    cpfValue = cpf.value.replace(/\D/g, "");
    cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpfValue)) {
        e.preventDefault();
        alert("Cpf inválido!")
        cpf.classList.add("invalid");
    }
    else {
        cpf.classList.remove("invalid");
    }

    phoneValue = phone.value.replace(/\D/g, "");
    phoneRegex = /^(\d{2})(\d{5})(\d{4})$/;
    if (!phoneRegex.test(phoneValue)) {
        e.preventDefault();
        alert("Formato do telefone inválido!");
        phone.classList.add("invalid");
    }
    else {
        phone.classList.remove("invalid");
    }

    if (password.value.length < 6) {
        e.preventDefault();
        alert("A senha precisa ter no mínimo 6 digitos!");
        password.classList.add("invalid");
    }
    else if (confPassword.value != password.value) {
        e.preventDefault();
        alert("As senhas estão diferentes!")
        confPassword.classList.add("invalid");
        password.classList.add("invalid");
    } else {
        confPassword.classList.remove("invalid");
        password.classList.remove("invalid");
    }
})