const express = require('express');

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

const wordCounter = { "run": 3 };
const sentenceCounter = { "run": 3 };

app.get("/sanity", (req, res) => {
    //exe1
    res.send("Server is up and running")
})


app.get("/word/:word", (req, res) => {
    //exe2
    const word = req.params.word;
    const count = wordCounter[word] ? { count: wordCounter[word] } : { count: 0 };
    res.send(count)
})

app.post("/word", (req, res) => {
    //exe3
    const word = req.body.word;
    let newWord;

    wordCounter[word] ? wordCounter[word]++ : wordCounter[word] = 1;
    res.send({
        text: `Added ${word}`,
        currentCount: wordCounter[word]
    });
})

app.post("/sentence", (req, res) => {
    //exe4
    const sentence = req.body.sentence;
    let numNewWords = 0;
    let numOldWords = 0;
    let words = sentence.split(" ");

    for (let index = 0; index < words.length; index++) {
        sentenceCounter[words[index]] ? numOldWords++ : numNewWords++;
    }

    res.send({
        text: `Added ${numNewWords} words, ${numOldWords} already existed`,
        currentCount: -1
    });
})

app.delete("/delete/:word", (req, res) => {
    //exe5
    const word = req.params.word;
    let newWord;
    if (wordCounter[word]) {
        delete wordCounter[word]
        res.status(200).send({
            text: `delete ${word} was deleted successfully`
        });
    }
    else {
        res.status(404).send({
            text: `Word ${word} not found`
        });
    }
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})