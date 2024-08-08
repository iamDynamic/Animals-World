async function CatsFact(){
    var url = "https://meowfacts.herokuapp.com/"
    var ftch = await fetch(url)
    var Res = await ftch.json()
    var Data = Res.data[0]
    console.log(Data);
    document.querySelector("h2").innerHTML = Data
}
document.querySelector("button").addEventListener("click",CatsFact)