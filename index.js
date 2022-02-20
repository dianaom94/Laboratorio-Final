function valoracion(){
    let valor = document.getElementById("rango").value
    if(valor != null){
        window.alert("Has valorado con"+ " "+ valor + " " + "puntos")
    }
}

function cuenta (){
    let cuenta = document.getElementById("cuenta").value
    if(cuenta != null){
        window.alert("Le informamos que su cuenta bancaria es"+ " "+ cuenta)
    }
}

function fecha (){
    let days = [
        'Domingo',
        'lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        
    ]
    let fecha = new Date (document.getElementById("fecha").value)
    let dia = fecha.getDay()
    let d = days[ dia.toString()]
   
    if(d != null){
        window.alert("la fecha seleccionada en el elemento de fecha es un"+ " "+ d)
    }
}

function validar (){
    let codes = document.getElementById("cp").value
    let msgAlerta = document.getElementById("msgAlerta")

    if(codes.length == 5 && parseInt(codes) >= 1000 && parseInt(codes) <= 52999)
    {
        msgAlerta.innerText= "El código es correcto"
        msgAlerta.classList.remove("error");
        msgAlerta.classList.add("exito")
    }
    else if(codes.length==""){
        msgAlerta.innerText= "El campo no puede estar vacío"
        msgAlerta.classList.add("error")
        msgAlerta.classList.remove("exito")
    }
    else {
        msgAlerta.innerText= "El código es incorrecto, por favor ingrese de nuevo los datos."
        msgAlerta.classList.add("error")
        msgAlerta.classList.remove("exito")
    }
}

function local(){
    let codes = document.getElementById("cp").value
    let local = document.getElementById ("lc").value
    let msgLocal = document.getElementById ("msgLocal")
    let codigos = {
        "01":"Alava",
        "02":"Albacete",
        "03":"Alicante",
        "04":"Almería",
        "05":"Ávila",
        "06":"Badajoz",
        "07":"Islas Baleares",
        "08":"Barcelona",
        "09":"Burgos",
        "10":"Cáceres",
        "11":"Cádiz",
        "12":"Castellón",
        "13":"Ciudad Real",
        "14":"Córdoba",
        "15":"La coruña",
        "16":"Cuenca",
        "17":"Gerona",
        "18":"Granada",
        "19":"Guadalajara",
        "20":"Guipúzcoa",
        "21":"Huelva",
        "22":"Huesca",
        "23":"Jaén",
        "24":"León",
        "25":"Lérida",
        "26":"La Rioja",
        "27":"Lugo",
        "28":"Madrid",
        "29":"Málaga",
        "30":"Murcia",
        "31":"Navarra",
        "32":"Orense",
        "34":"Asturias",
        "35":"Palencia",
        "36":"Las Palmas",
        "37":"Pontevedra",
        "38":"Salamanca",
        "39":"Santa Cruz de Tenerife",
        "40":"Cantabria",
        "41":"Segovia",
        "42":"Sevilla",
        "43":"Soria",
        "44":"Tarragona",
        "45":"Teruel",
        "46":"Toledo",
        "47":"Valencia",
        "48":"Valladolid",
        "49":"Vizcaya",
        "50":"Zamora",
        "51":"Zaragoza",
        "52":"Ceuta",
        "53":"Melilla"
    }
    if(local == ""){
        msgLocal.innerText= "El campo no puede estar vacío"
        msgLocal.classList.add("error")
        msgLocal.classList.remove("exito")

    }

    for (const key in codigos) {
      
            const element = codigos[key];
            if (codes.substr(0,2) == key && element== local){
                msgLocal.innerText= "El código es correcto"
                msgLocal.classList.remove("error");
                msgLocal.classList.add("exito")
                break
    } else{
        msgLocal.innerText= "El código es incorrecto"
        msgLocal.classList.remove("exito")
        msgLocal.classList.add("error");
        
        
    }
    
            }
}