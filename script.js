let loc = document.getElementById('location')
let climate = document.getElementById('climate')
let temp = document.getElementById('temp_value')

window.addEventListener('load',() => {
    let lat;
    let long;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude
            long = position.coords.longitude
            //const proxy = `https://cors-anywhere.herokuapp.com/`
            const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=15d5db89456466b90d2c3b9c9bf070e6`
            getAPI(url)
            const {name} = data
            const {feels_like} = data.main
            const {id,main} = data.weather[0]
            /*loc.innerHTML = name
            climate.innerHTML = main
            temp.innerHTML = feels_like*/
        })
    }
})
//location name, climate, temp




async function getAPI(url){
            let resp = await fetch(url)
            let data = await resp.json()
            console.log(data)
    
}

