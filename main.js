var div = document.getElementById("div")


fetch("graal.txt")
 .then(response => response.text())
 .then(x => textProcess(x))
 
 
 
 var textProcess = (x) =>{
    var array = JSON.parse(x)[0]
    mapList(array)
 }
 
 
 var mapList = (x) =>{
    var newArray = x//x.slice(0, 500)
    dadosRender(newArray)
    
 }
 
 
 var stylex = `
 width:50px;
 height:auto;
 border:solid 1px black;
 margin:10px;
 background:#00021c;
 align-self: stretch;
 `
 

 var img
 var dadosRender = (x) =>{
    x.forEach((IMG) =>{
       img = document.createElement("img")
       img.src = "imgs/"+IMG
       div.appendChild(img)
       img.style = stylex
       getCode(img)
       
    })
 }
 var alertText = `
 TEXTO COPIADO ✔️
 `
 
 
 var getCode = (x) =>{
    img.onclick = () =>{
       var fileName = x.src.split("/").pop()
       var codigo = "setshield "+fileName+"  "+"#i("+fileName+")"
       alert(alertText)
       copyCode(codigo)
       testes()
    }
 }
 
 
 var copyCode = (x) =>{
    if(navigator.clipboard){
       //console.log("sim")
       navigator.clipboard.writeText(x)
        .then(() =>{
           //console.log("texto copiado")
        })
        .catch(err => {
           //console.error("ocoreu um erro", err)
        })
      
    }else{
       //console.log("seu navegador nao suporta")
    }
 }
 
 
 
 
