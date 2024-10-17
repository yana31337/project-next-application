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
                "title": "Travel",
                "description": "Looking for a truly remote, off-the-grid adventure? Try Panama",
                "image": "https://i.natgeofe.com/n/bd40e5a2-e085-4f1d-88a2-6504a8348690/GettyImages-1168257279.jpg?w=2520&h=1636",
                "content": `Panama is an adventure traveler’s playground, with rainforest hikes set to the soundtrack of howler monkeys and conservationist-led beach jaunts to watch sea turtles nest at night. Despite such natural draws, the country’s tourism has long centered on its famed canal and buzzing capital. 
                However, a new community-based tourism initiative could change that.
                Now, travelers can go deeper into Panama’s nature and culture with the people who know it best: Indigenous and rural communities via the SOSTUR network. 
                The recently launched digital portal lets visitors book sustainable adventures in regions largely untouched by tourism.Locals (chefs, artisans, conservationists) show globetrotters the country’s less-trodden side, from jungle treks and wildlife sightings to traditional cooking and art classes. 
                Given the remoteness, visitors typically stay in village accommodations, such as guesthouses or cabins.In turn, communities receive important tourism income that supports Panama’s rich flora and fauna. Here’s how to experience it.`,
                "text": "A new initiative links travelers with Indigenous and rural guides, opening access to regions that have been largely untouched by tourism."
            },
            {
                "id": 2,
                "title": "Travel",
                "description": "You’ve heard of forest bathing. Now try forest therapy",
                "image": "https://i.natgeofe.com/n/27dc20ba-ed44-40b2-bba2-794ee9d0597d/NationalGeographic_747545.jpg?w=2520&h=1636",
                "content": `A walk in the woods is not only good for you physically, it’s also good for you psychologically. Studies show time spent in nature reduces mental fatigue and irritability, cortisol levels, and stress.
                “Nature is important for our health in so many ways,” says Melissa Lem, a Vancouver doctor and director of PaRx, a Canadian program encouraging doctors to prescribe time in nature for their patients. “We have a standardized recommendation that you spend at least two hours in nature each week and at least 20 minutes each time.”
                No wonder many cities and parks are installing forest therapy trails—short, self-guided paths meant to immerse users in nature and engage all their senses. Designed by organizations such as the Association of Nature and Forest Therapy (ANFT) and Global Institute of Forest Therapy and Nature Connection (GIFT), more than a dozen trails have launched in the United States, Costa Rica, Slovenia, and Canada. Here’s why you should seek out a therapeutic walk.`,
                "text": "There are nearly two dozen certified trails around the world that guide visitors to engage with nature in ways that benefit their health and foster deeper exploration.",

            },
            {
                "id": 3,
                "title": "Animals",
                "description": "What is ‘kelping’? Why whales are making hats out of seaweed",
                "image": "https://i.natgeofe.com/n/5dc97ace-4609-421c-b31e-e8f27410b6a1/NationalGeographic_2772350.jpg?w=374&h=561",
                "content": `Humpback whales are well known for their fascinating culture: These enigmatic animals migrate thousands of miles every year, sing enchanting songs, leap from the water in an enormous breach, and collaborate while hunting—creating bubble nets that trap their prey.
                Now, researchers have shed light on another aspect of whale behavior: playing with kelp they find floating in the ocean—moving it between their fins, rolling around with it, and, most intriguingly, wearing it atop their heads like a hat.
                This behavior—called kelping—has been described in a new study as a “global phenomenon.” The study documents instances of humpbacks (Megaptera novaeangliae) worldwide interacting with seaweed, taken from over a hundred social media posts, and shows that this playful behavior is much more common than previously thought.`,
                "text": "A new study sheds light on a fascinating whale behavior. But is it a form of play—or the marine equivalent of a skincare routine?"
            },
            {
                "id": 4,
                "title": "Travel",
                "description": "Finding balance on a nature pilgrimage with Japan's Yamabushi mountain priests",
                "image": "https://i.natgeofe.com/n/9ed3e463-8788-42b7-b362-5fa5ef54b3c3/spirtual-japan_2017023Japan_Wondertrunk_12_ukHR.jpg?w=2520&h=1636",
                "content": `In Yamabushi lore, the steps at the entrance to Haguro’s mountain sanctuary symbolise the descent into hell. But hell is the last thing on my mind as I stand at the carved wooden gate of Zuishinmon, with those steps before me. Japanese nightingales and bush warblers are calling to one another in the crowns of maple trees above my head. Sunbeams caress my back as I bow beneath the gate — an acknowledgement of the guardian spirits who are believed to roam these sacred slopes. 
                “Use your whole body to pull in the spiritual energy of this place,” says my guide Kazuhiro Hayasaka before we start to descend, single file, down the steps. We’re carrying 6ft wooden walking staffs that thud on stone like a soporific heartbeat as we hike. Frogs gurgle like drains, hidden in water channels that trickle at our feet. The air is cool and still, thanks to a blanket of cover thrown by a grand avenue of cedars, planted in the 1600s to line the 2,446 steps that steer pilgrims to Mount Haguro’s peak. If this is hell, I’m seriously conflicted. `,
                "text": "Japan’s Yamabushi priests offer visitors nature immersion and a unique insight into their culture on the slopes of the holy Dewa Sanzan."
            },
            {
                "id": 5,
                "title": "Science",
                "description": "Humans are about to explore a metal-rich asteroid for the first time. Here's why",
                "image": "https://i.natgeofe.com/n/9d6543ed-c1c6-403a-a56c-94d718689c39/jpegPIA21499.jpg?w=2520&h=1636",
                "content": `Hiding within the asteroid belt exists a world suffused with metal, where the surface may be covered in cliffs and craters of iron alloys. Glimpsed only as a bright speck in telescope images, no one knows exactly what the metal asteroid, named Psyche, looks like. It could simply be a lump of rock and metal—but it could also be decorated with an array of otherworldly aspects, from frozen flows of sickly yellow lava to upright tendrils of solidified iron, like undulating spires thrust toward the sky.
                Scientists hope that Psyche is “something really bizarre,” says Henry Stone of NASA’s Jet Propulsion Laboratory, the project manager of a new mission to explore the asteroid.
                That mission, also named Psyche, is set to launch from NASA’s Kennedy Space Center in Florida on October 12, propelled off-world by a SpaceX Falcon Heavy rocket. The spacecraft will then begin a Herculean journey through the solar system until, in 2029, it catches up to the enigmatic metal asteroid.`,
                "text": "This strange asteroid could be the exposed heart of a failed planet—or something even more mysterious. NASA is about to find out."
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
    if (cardById.length > 0) {
        res.json(cardById[0])
    } else {
        res.status(404).json({ status: "not found" })
    }
});

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});