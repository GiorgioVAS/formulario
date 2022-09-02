const nombre= document.getElementById("nombre")
const correo = document.getElementById("correo")
const  numero = document.getElementById("numero")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("button", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    if(nombre.value.length < 3){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    console.log(regexEmail.test(correo.value))
    if(regexEmail.test(correo.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(numero.value.length < 8) {
        warnings += 'El numero es bajo <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})