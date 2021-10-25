let theme = "light";
const handleChangeTheme = ()=>{
    console.log("Trocar tema")
    if(theme == "light"){
        console.log("Este é o tema claro")
        theme = "dark"
        document.querySelector("button").innerText = "🌚"
        document.body.style.backgroundColor = "#1e1e1e"   
    }else{
        document.querySelector("button").innerText = "🌞"   
        document.body.style.backgroundColor = "rgb(219, 219, 219)"   
        console.log("Este é o tema escuro")    
        theme = "light"   

    }
}