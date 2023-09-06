var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

const host = '127.0.0.1';
const port = 7000;

const data = {
    "cards": {
        "smallcard": [
            {
                "id": 1,
                "title": "Culture",
                "description": "These Native Americans were taken from their families as children",
                "image": "https://i.natgeofe.com/n/c7be73b1-527f-467d-af2e-1806ae2a56e4/STOCK_MM9481_SOYI_USA_SD_WandaGarnier_square.jpg?w=390&h=390"
            },
            {
                "id": 2,
                "title": "Science",
                "description": "How magnesium affects your sleep and anxiety",
                "image": "https://i.natgeofe.com/n/82e569c5-77da-400b-af45-316e07e81580/C0115983-Magnesium_square.jpg?w=390&h=390"
            },
            {
                "id": 3,
                "title": "Travel",
                "description": "How to plan a music tour of Liverpool for Eurovision 2023",
                "image": "https://i.natgeofe.com/n/b01c37b9-a201-484b-89ae-c922c61f417b/W6FKHM_square.jpg?w=390&h=390"
            },
            {
                "id": 4,
                "title": "Travel",
                "description": "6 of the best Sir David Attenborough series to watch",
                "image": "https://i.natgeofe.com/n/b667437a-2afc-45a0-b13b-5d9df3b8623b/FDW7WY_square.jpg?w=390&h=390"
            },
            {
                "id": 5,
                "title": "History & Culture",
                "description": "North Carolina experiences await beyond Raleigh",
                "image": "https://i.natgeofe.com/n/49281e7b-2820-45f5-9142-a30a6741d960/MM9809_211022_01752_square.jpg?w=390&h=390"
            }
        ],
        "mediumcard": [
            {
                "id": 1,
                "title": "Animals",
                "description": "Why we still haven’t caught the world’s largest fish",
                "image": "https://i.natgeofe.com/n/20b40674-34b6-4adb-b933-f2492f2a255e/zeb-and-team-with-giant-freshwater-stingray-thailand-photo-courtesy-National-Geographic_4x3.jpg?w=620&h=466"
            },
            {
                "id": 2,
                "title": "Science",
                "description": "How amber creates exquisite fossils",
                "image": "https://i.natgeofe.com/n/79ce0667-a809-4c8c-8e3c-860a2d7601f8/STOCK_DEPARTMENTS_2305_amber_4x3.jpg?w=620&h=466"
            },
            {
                "id": 3,
                "title": "Travel",
                "description": "Awaken Your Inner Explorer",
                "image": "https://i.natgeofe.com/n/db3d5094-277a-40b4-b922-6f58450b7ed3/DSC03088_4x3.jpg?w=620&h=466"
            },
            {
                "id": 4,
                "title": "Science",
                "description": "See Iconic Wildlife",
                "image": "https://i.natgeofe.com/n/e68703b2-557c-4b89-bcf0-4568c29ec8e8/LindbladAA424_4x3.jpg?w=620&h=466"
            }
        ],
        "largecard": [
            {
                "id": 1,
                "title": "History & Culture",
                "description": "How does a magician trick other magicians? We went to find out.",
                "image": "https://i.natgeofe.com/n/014fd16c-b6f9-4103-8a97-58020c6c98d7/MM9980_220726_254-2_4x3.jpg?w=1272&h=954"
            },
            {
                "id": 2,
                "title": " ",
                "description": "Discover the Heart of Europe",
                "image": "https://i.natgeofe.com/n/d6bc28b0-505c-4bc8-a2b9-43c92820d019/NationalGeographic_2746069_JRoh_4x3.jpg?w=1272&h=954"
            }
        ]
    }
}

app.use(express.json());

app.post("/auth", (req, res) => {
    const { username, password } = req.body;
    if (username == "user1" && password == "1111") {
        let data = { token: "qewqeqwe" }
        res.json(data)
    } else {
        res.status(403).json({ status: "wrong password" })
    }
});

app.get("/", (req, res) => {
    res.send("Hello world")
});


app.get("/cards", (req, res) => {
    res.json(data)
});

app.get("/cards/:cardId", (req, res) => {
    let cardById = data.cards.smallcard.filter(card => card.id == req.params.cardId)
    console.log(req.headers)
    if (cardById.length > 0) {
        res.json(cardById[0])
    } else {
        res.status(404).json({status: "not found"})
    }
});

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});