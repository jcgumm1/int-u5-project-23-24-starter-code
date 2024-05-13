// Declare your arrays here
let movieInput = document.querySelector(".movie");
// Make sure to declare your HTML elements as variables! 
let comedyM = ["Madea.jpg", "Friday_After_Next.webp", "21jumpstreet.avif"]
let actionM = ["miles.jpg", "The_Batman_(film)_poster.jpg", "missionimpossible.jpg"]
let dramaM = ["ironclaw.jpg","unfrosted.jpg","holdover.jpg"]
console.log(comedyM)
let div = document.querySelector("div")
// Submit Button 
let submitButton = document.querySelector("button");



//submitButton.addEventListener("click", function() {let movieInput= document.querySelector(".movie").value;

//console.log("clickclick");}
submitButton.addEventListener("click", function () {
div.innerHTML=""


    if (movieInput.value === "Comedy") {

        comedyM.forEach(function (Cmovies) {
            console.log(Cmovies)
            let p = document.createElement("img")
            p.src = Cmovies;
            div.appendChild(p)
        })
    }


    if(movieInput.value==="Action") {
        actionM.forEach(function(Amovies){console.log(Amovies)
           let p =document.createElement("img")
          p.src=Amovies;
           div.appendChild(p)
        })};

    console.log(movieInput);


    if(movieInput.value==="Drama") {
        dramaM.forEach(function(Dmovies){console.log(Dmovies)
           let p =document.createElement("img")
          p.src=Dmovies;
           div.appendChild(p)
        })};

    console.log(movieInput);
})



 








