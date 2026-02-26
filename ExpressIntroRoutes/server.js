const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 3000;

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.get("/", (req, res) => {
    res.send("Server is up and running smoothly");
});

app.get("/priceCheck/:name", (req, res) => {
    const name = req.params.name;
    const item = store.find(i => i.name === name);
    item ? res.send({ price: item.price }) : res.send({ price: null });
});

app.put("/buy/:name", (req, res) => {
    const name = req.params.name;
    const index = store.findIndex(i => i.name === name);
    store[index].inventory = store[index].inventory - 1;
    res.send(store[index])
});

app.put("/sale", (req, res) => {
    let storeAfterDiscount = store;
    const admin = req.query.admin;
    if (admin === "admin") {
        storeAfterDiscount = store.map(i => i.inventory > 10 ? { ...i, price: i.price * 0.5 } : i)
    }
    res.send(storeAfterDiscount)
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})