function searchGifs() {
    let iframe = document.getElementById("frame");
    let text = document.getElementById("text");
    if (text.value === "")
        text.value = "cat";
    console.log(text.value);
    fetch('https://api.giphy.com/v1/gifs/search?q=' + text.value + '&api_key=3ae2PvlbNsT53IMCVSLPNTx36vhw71HL')
        .then(Response => Response.json())
        .then(data => {
            iframe.src = data.data[0].embed_url;
        });


}
searchGifs();