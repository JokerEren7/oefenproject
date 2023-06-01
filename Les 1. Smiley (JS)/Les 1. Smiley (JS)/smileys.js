let dit = 1

function smile() {
  
  let images = document.getElementById("imgid")
  dit++;
  if (dit == 1) {
    images.src = "images/2.png"

  }
   if (dit == 2) {
    images.src = "images/3.png"
  }
     if (dit == 3) {
      images.src = "images/4.png"

}
if (dit == 4) {
  images.src = "images/5.png"

}if (dit == 5) {
  images.src = "images/6.png"

}
if (dit == 6) {
  dit = 0}
}



function lichtschakelaar() {
  let licht = document.getElementById("lichtdit")
  console.log(licht.value)
  if (licht.value == "uit") {
    document.body.style.background = 'black'
    licht.value = "aan"
  }
  else if (licht.value == "aan") {
    document.body.style.background = 'white'
    licht.value = "uit"
  }
}
