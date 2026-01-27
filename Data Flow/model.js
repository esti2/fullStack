const posts = [{ name: "post1", text: "post1 bla bla" },
{ name: "post2", text: "post2 bla bla" }]


export function getPost() {
    const postsClone = [...posts];
    return postsClone;
}

export function addPost(itemName, itemText) {
    posts.push({
        name: itemName,
        text: itemText
    })
}

//export function deleteItem(itemId) { }