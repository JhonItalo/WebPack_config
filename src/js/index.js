import "../css/main.scss"
console.log("js executado")

const b = document.querySelector(".title")
b.addEventListener("click", ()=>
 {
    import("./user/create.js").then(module => {
        console.log(module.a)
        module.teste.log();
    })


}
 )


