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



div.style.boxSizing = 'content-box'
div.style.background = 'rgb(99, 129, 212, .5)'
div.style.border = '5px solid white'
div.style.borderRadius = '4px'
/*div.style.marginRight = '200px'
div.style.marginLeft = '200px'*/
div.style.display = 'flex'
div.style.flexDirection = 'row'
div.style.justifyContent = 'space-around'
div.style.flexWrap = 'wrap'


if (info.media_type === 'image') {
 div.innerHTML =  `<h2>${info.title} (${info.date})</h2> <p>${info.explanation}</p> <img src= "${info.url}"> `
 

} else if (info.media_type === 'video') { 
    div.innerHTML = `<h2>${info.title} (${info.date})</h2> <p>${info.explanation}</p> <iframe src=${info.url}></iframe>`
    
}    
}
