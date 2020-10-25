const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const cors = "https://noroffcors.herokuapp.com/";

const corsUrl = cors + url;

const resultsContainer = document.querySelector(".results");

async function getGames() {

    try {

        const response = await fetch(corsUrl);

        const data = await response.json();

        console.log(data);

        const games = data.all;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            console.log(games[i]);

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">
                                                <h5>${games[i].name}</h5>
                                                <p>Rating: ${games[i].rating}</p>
                                                <p>Number of Tags: ${games[i].tags.length}</p>
                                            </div>`;
                                                        
        }
        
    } catch (error) {        

        console.log("An error occurred with the API call");

        resultsContainer.innerHTML = displayError("An error occurred whilst fetching data, please try again later. If the error persists, contact support.");
        
    }
}

getGames();