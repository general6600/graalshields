var main = document.getElementById("main")
var styleMain = `
margin-left:7%;
image-rendering:pixelated;

`
main.style = styleMain

fetch("graal.txt")
 .then(response => response.text())
 .then(x => getCodes(x))
 
 
 
 var getCodes = (x) =>{
     var newArray = JSON.parse(x)[0]
     renderFiles(newArray)
 }
 var url = "https://classiccachecloud.quattroplay.com/custom_shields/"
 
 var styles = `
 width:50px;
 height:50px;
 background:#636574;
 border:solid 1px black;
 `
 
 
 var renderFiles = (x) =>{
     x.forEach((imgs) =>{
         var img = document.createElement("img")
         img.src = url+imgs
         img.style = styles
         main.appendChild(img)
         createCode(img)
     })
 }
 
 
 var createCode =(x)=>{
     x.onclick =()=>{
         var code = x.src.split("/").pop()
         var newCode = "setshield "+code+" "+"#i("+code+")"
        copiarTexto(newCode)
     }
 }
 
 
 
 var copiarTexto = (x) =>{
     if(navigator.clipboard){
         navigator.clipboard.writeText(x)
         
         .then(() =>{
             
             alert(`
             TEXTO COPIADO ✔️
             
             `)
         })
         .catch(err =>{
             console.log("erro")
         })
     }else{
         alert("SEU NAVEGADOR NAO TEM SUPORTE")
     }
 }