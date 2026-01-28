function getJoke() {
    let joke = document.getElementById("joke");
    joke.innerHTML = "loading joke...";
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())  // המרה ל-JSON
        .then(data => {
            joke.innerHTML = data.setup + " " + data.fetch;

        })
        .catch(error => {
            console.log('שגיאה:', error);
        });
}

