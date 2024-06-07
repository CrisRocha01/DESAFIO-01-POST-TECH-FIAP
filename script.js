const botao = document.querySelector("#button");
const post = "https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact";

botao.addEventListener("click", (e) => {
    e.preventDefault();
    criarObjEEnvia() 

});

function criarObjEEnvia() {
    const arrayNomes = [];
    const nomes = document.querySelectorAll(".nome");
    const mensagem = document.querySelector("#message");

    nomes.forEach((nome) => {
        arrayNomes.push(nome.value);
    });

    fetch(post, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'names': arrayNomes,
            'message': mensagem.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}
