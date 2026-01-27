import { addPost, getPost } from "./model.js";



function render() {
    const posts = getPost();
    const container = document.querySelector("#container");
    container.innerHTML = "";
    container.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        const postDiv = document.createElement("div");
        postDiv.innerText = posts[i].name + " " + posts[i].text;
        container.appendChild(postDiv);
    }
}


const button = document.querySelector("#button");
button.addEventListener("click", () => {
    const name = document.querySelector("#name");
    const text = document.querySelector("#text");
    addPost(name.value, text.value);

    render();
    name.value = "";
    text.value = "";
});
render();
