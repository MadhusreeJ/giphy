async function fetchDataHome() {
    try {
        let home = document.getElementById("gif");
        home.innerText = "";
        apiKey = '6FfoLgWVHy6mUD67agXS0NNA3S6kdWJO';
        let data = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`, {
            method: 'GET'
        });
        let trending = await data.json();
        let gif = trending.data;
        console.log(gif);
        gif.forEach(element => {
            let trendingGif = document.createElement("img");
            trendingGif.src = element.images.original.url;
            trendingGif.setAttribute("class", "rounded float-start");
            trendingGif.setAttribute("style", "width : 18% ; height : 250px; margin-top : 5px");
            home.appendChild(trendingGif);
        });
    }
    catch (error) {
        console.log(error);
    }
}
fetchDataHome();



let searchDiv = document.getElementById("search");
var form = document.createElement("form");
form.setAttribute("class", "d-flex");
form.setAttribute("role", "search");
searchDiv.appendChild(form);

let input = document.createElement("input");
input.setAttribute("class", "form-control ; me-2");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Enter your search");
input.setAttribute("aria-label", "Search");
form.appendChild(input);

let btn = document.createElement("button");
btn.setAttribute("class", "btn btn-success");
btn.setAttribute("type", "submit");
btn.innerText = "Search";
searchDiv.appendChild(btn);
btn.addEventListener("click", async function fetchDataSearch() {

    try {
        let home = document.getElementById("gif");
        home.innerText = "";
        let name = input.value;
        console.log(name);
        apiKey = '6FfoLgWVHy6mUD67agXS0NNA3S6kdWJO';
        let searchData = await fetch(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiKey}`, {
            method: 'GET'
        });
        console.log(searchData);
        let searching = await searchData.json();
        let gif = searching.data;
        console.log(gif);
        gif.forEach(element => {
            let yourGif = document.createElement("img");
            yourGif.src = element.images.original.url;
            yourGif.setAttribute("class", "rounded float-start");
            yourGif.setAttribute("style", "width : 18% ; height : 250px; margin-top : 5px");
            home.appendChild(yourGif);
        });
    }
    catch(error) {
        console.log(error);
    }
});
    

let sticker = document.getElementById("sticker");
sticker.addEventListener("click" , async function fetchDataSticker(){
    try{
        let home = document.getElementById("gif");
        home.innerText = "";
        apiKey = '6FfoLgWVHy6mUD67agXS0NNA3S6kdWJO';
        let data = await fetch(`https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}`, {
            method: 'GET'
        });
        let trending = await data.json();
        let sticker = trending.data;
        console.log(sticker);
        sticker.forEach(element => {
            let trendingSticker = document.createElement("img");
            trendingSticker.src = element.images.original.url;
            trendingSticker.setAttribute("class", "rounded float-start");
            trendingSticker.setAttribute("style", "width : 18% ; height : 250px; margin-top : 5px");
            home.appendChild(trendingSticker);
        });
    }
    catch(error){
        console.log(error);
    }
});


let emoji = document.getElementById("emoji");
emoji.addEventListener("click" , async function fetchDataEmoji(){
    try{
        let home = document.getElementById("gif");
        home.innerText = "";
        apiKey = '6FfoLgWVHy6mUD67agXS0NNA3S6kdWJO';
        let data = await fetch(`https://api.giphy.com/v1/emoji?api_key=${apiKey}`, {
            method: 'GET'
        });
        let dataJson = await data.json();
        let result = dataJson.data;
        console.log(result);
        result.forEach(element => {
            let emoji = document.createElement("img");
            emoji.src = element.images.original.url;
            emoji.setAttribute("class", "rounded float-start");
            emoji.setAttribute("style", "width : 18% ; height : 250px; margin-top : 5px");
            home.appendChild(emoji);
        });
    }
    catch(error){
        console.log(error);
    }
});

let giphy = document.getElementById("giphy");
giphy.addEventListener("click" , fetchDataHome);