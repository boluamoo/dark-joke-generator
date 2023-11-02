const jokeSetup = document.getElementById('setup')
const jokeDelivery = document.getElementById('delivery')
const btn = document.getElementById('btn')
const url = 'https://v2.jokeapi.dev/joke/Dark?type=twopart'

let getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      jokeSetup.innerText = json.setup
      jokeDelivery.innerText = json.delivery
    })
}

btn.onclick = () => {
  getJoke()
}
