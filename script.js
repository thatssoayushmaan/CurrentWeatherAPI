let loc = document.getElementById('location')
let climate = document.getElementById('climate')
let temp = document.getElementById('temp_value')
let icon = document.getElementById('temp_icon')

window.addEventListener('load',() => {
    let lat;
    let long;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude
            long = position.coords.longitude
            //const proxy = `https://cors-anywhere.herokuapp.com/`
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=15d5db89456466b90d2c3b9c9bf070e6`
            getAPI(url)
    
        })
    }
})





async function getAPI(url){
            let resp = await fetch(url)
            let data = await resp.json()
            //console.log(data)
            loc.innerHTML = data.name
            temp.innerHTML = Math.round(data.main.feels_like - 273)
            climate.innerHTML = data.weather[0].main
            const {id} = data.weather[0]
            let img
            if(id >= 200 || id < 300){
                img = '11d'
            }
            if(id >= 300 || id < 500){
                img = '09d'
            }
            if(id >= 500 || id < 600){
                img = '10d'
            }
            if(id >= 600 || id < 700){
                img = '13d'
            }
            if(id >= 700 || id < 800){
                img = '50d'
            }
            if(id == 800){
                img = '02d'
            }
            if(id > 800){
                img = '04d'
            }
            icon.src = `http://openweathermap.org/img/wn/${img}@2x.png`


            return data
    
}

