let botao = document.getElementById('input')
let date = document.getElementById('date')
let div = document.getElementById('information')


botao.addEventListener('click', function (event) { 
    event.preventDefault()
    console.log('Apertei o botaum')
    getData(date.value)
})

async function getData (date) {
 let response =  await fetch (`https://api.nasa.gov/planetary/apod?api_key=54oleeEyUOMjbpjM82h1KUfcFpBckbA8J8Z6JuxK&date=${date}`);
    console.log(response)

 let info = await response.json()   
 console.log (info)
 showInfo(info)
}

function showInfo(info) {
div.innerHTML += `<h2>${info.title} (${info.date})</h2>`
div.innerHTML += `<p>${info.explanation}</p>`

if (info.media_type === 'image') {
 div.innerHTML =  `<img src= "${info.url}">`

} else if (info.media_type === 'video') { 
    div.innerHTML = `<iframe src=${info.url}></iframe>`
}    
}
