const express = require('express')
const http = require("http");

const cors = require("cors");
const app = express()
// https://intouchlive.netlify.app
// http://localhost:3000
app.use(cors({
    origin: 'https://kouchlive.netlify.app',
    credentials: true,
}));
app.use(express.json())

const server = http.createServer(app);
const PORT = process.env.PORT || 4000


let feedback = []

let male = [{
    name: 'Fernandoz',
    age: '26',
    gender: 'male',
    location: 'Mexico',
    pid: '35O2883',
    summary: "I'm a wildlife photographer, and I'm obsessed with capturing amazing pictures of animals in their natural homes. My life always remain on the go. I love the thrill of getting that perfect shot. When I'm not chasing wildlife, you'll find me exploring new places, meeting interesting people, and soaking in the wonders of nature. If animal kingdom excites you, then I am your guide."
},
{
    name: 'Matheus',
    age: '21',
    gender: 'male',
    location: 'Canada',
    pid: '41Z3069',
    summary: 'Music lover 🎵 | Wanderlust soul ✈️ | Bookworm 📚 | Coffee addict ☕ | Creative thinker 🎨 | Fitness freak 💪 | Avid traveler 🌏. Planning my life, to retire in early 30s. Haha'
},
{
    name: 'Sanchit',
    age: '20',
    gender: 'male',
    location: 'India',
    pid: '20T3162',
    summary: 'Chai, Sutta and Netlix. That sums up my current situation. Can talk on any topic, test me out. I vibe more with girls, cauz my life is always surrounded with girls. From mother to sisters (plural lol), to my neighbours. Peace out.'
},
{
    name: 'Gaurav',
    age: '23',
    gender: 'male',
    location: 'India',
    pid: '60B3350',
    summary: "Influencer marketing head 9 to 5. Couch potato & reels scroller 5 to 11. I have worked with major indian influencers and if you are interested in some gossip or insight, then I can make your day.Jk, bound under NDA.Miss those travelling days as an intern and auto wale bhaiya ki exciting stories.Looking for someone with different perpective and domain."
}]

// let female = [
//     {
//         name: 'Yuvika',
//         age: '19',
//         gender: 'female',
//         location: 'India',
//         pid: '69P2976',
//         summary: " As a dedicated foodie, pet lover, and part-time author. From exploring street food to cuddling up with my furry friends, life is too kind to me. And in my free time, I plan someone's murder, not to afraid I write crime thriller novels. Hehe "
//     },
//     {
//         name: 'Katrin',
//         age: '23',
//         gender: 'female',
//         location: 'Brazil',
//         pid: '68E3255',
//         summary: 'Eat, Job, Club, Sex, Eat, Sleep and Repeat. Hoping to get a break over here. Gosh, connect with me if you are not in a rat race.'
//     },
//     {
//         name: 'Falak',
//         age: '18',
//         gender: 'female',
//         location: 'India',
//         pid: '60V3348',
//         summary: "I listen to Desi Hip Hop music (Strange I know). Will be starting my college life soon. Fingers crossed, hope it doesn't end in vain like school life. Loves to stare at stars at night and a big time procrastinator. Hip Hop lovers are invited."
//     },
//     {
//         name: 'Airah',
//         age: '20',
//         gender: 'female',
//         location: 'India',
//         pid: '60G3350',
//         summary: "I live in my own world of delulu dreams and fantasy almost full time. I got lot of stories to share and ready to consume also. No time for BF-GF, already committed, just need a good friend to understand me.If you also need one, then I could be the best option for you.If things went right, we might turn it into a long term friendship and might do meet upin future. Hoping for someone good."
//     },
//     {
//         name: 'Ritika',
//         age: '17',
//         gender: 'female',
//         location: 'India',
//         pid: '60V3350',
//         summary: "I am a bathroom singer, and gaming enthu. I have played a wide range of games from mobile to console. Assassin's Creed & Riders Republic are my fav. Would love match with gaming buddy and non gaming buddies are welcome to. But keep in mind besides games I might not have much things to talk."
//     },
//     {
//         name: 'Olivia',
//         age: '26',
//         gender: 'female',
//         location: 'USA',
//         pid: '68Y3255',
//         summary: " I live in texas, work full time but I usually have free time in the day to talk. Besides for going to work I’m usually a homebody. Like, 99% of the time I’m either at work, home, or helping my single mother. Just got broke up, so no commitments rn. I love watching movies and tv shows, especially action, comedy, thriller, some horror. Love to connect"
//     },
//     {
//         name: 'Eshita',
//         age: '22',
//         gender: 'female',
//         location: 'India',
//         pid: '68X3255',
//         summary: "Today was my first day at office and it went horribly bad. I was fucking crying from inside, only I know how I controlled my tears. I am fucking terrified for my next day. And all those people looking me with their wide eyes, is more embarrassing. Looking for someone to release my stress. If anyone went through this experience is much needed."
//     },
//     {
//         name: 'Valentina',
//         age: '30',
//         gender: 'female',
//         location: 'Mexico',
//         pid: '69Y3255',
//         summary: "I struggle with depression and chronic pain. I had to give up my profissional life because of my illness and then realised I don't really have any friends. I always had a great relationship with people, but ever since I got sick they have turned their back on me. Looking for positivity and positive friends. High hopes"
//     },
// ]

let female = [
    {
        name: 'Eshita',
        age: '22',
        gender: 'female',
        location: 'India',
        pid: '68X3255',
        summary: "So here's my secret: I got stuck in boys washroom when I was in 6th class, by mistake. And somehow sweaper found out and got me out. That was the most embarassing moment for me, whole class was laughing at me 🤡🤡. I can connect with anyone, only if your secret excites me 😃."
    },
]

var id = 30;
let user_map = new Map();

function hashing() {
    id = id + 1;
    var num = Math.floor(Math.random() * 27);
    const leveller = 64;
    if (num == 0) num = num + 1;
    var alphabet = String.fromCharCode(num + leveller);

    var start = Math.floor(Math.random() * 1000).toString();
    var val = id * 9;
    val = val.toString();

    return start + alphabet + val + id;
}

app.get("/onlineUsers", async (req, res) => {
    res.status(200).json({
        success: true,
        userData: male.length + female.length,
    })
});

app.post("/submitFeedback", async (req, res) => {

    feedback.push(req.body.feedback)

    console.log(feedback)

    res.status(200).json({
        success: true,
        feedback: feedback
    })
});

app.get("/getFeedback", async (req, res) => {
    res.status(200).json({
        success: true,
        userData: feedback
    })
})


app.get("/allData", async (req, res) => {
    res.status(200).json({
        success: true,
        userData: user_map,
        userIp: user_ip
    })
});


app.post("/addUser", async (req, res) => {

    var gender = req.body.gender;
    var obj = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        location: req.body.location,
        pid: req.body.pid,
        summary: req.body.summary
    }

    obj.pid = hashing();

    if (gender == 'male') {
        male.push(obj)
    }
    else if (gender == 'female') female.push(obj)

    user_map.set(obj.pid, { ...obj, removed: false });

    console.log('male---', male)
    console.log('female---', female)
    res.status(200).json({
        success: true,
        obj
    })

});

app.post("/existingUser", async (req, res) => {
    const userId = req.body.pid

    if (user_map.has(userId) && user_map.get(userId).removed) {
        const obj = user_map.get(userId)
        console.log('added again')
        if (obj.gender === 'male') male.push(user_map.get(userId))
        else female.push(user_map.get(userId))

        user_map.set(userId, { ...obj, removed: false })

        res.status(200).json({
            success: true,
        })
    }
    else if (user_map.has(userId) && !user_map.get(userId).removed) {
        console.log('not added again')
        res.status(200).json({
            success: true,
        })
    }

    else {
        res.status(200).json({
            success: false,
        })
    }
});

app.post("/skipUser", async (req, res) => {

    if (!user_map.has(req.body.userId)) {
        res.status(200).json({
            success: true,
            receiver_id: null
        })
    }
    else {
        if (user_map.get(req.body.userId).removed) {
            const obj = user_map.get(req.body.userId)
            console.log('added again')
            if (user_map.get(req.body.userId).gender === 'male') male.push(user_map.get(req.body.userId))
            else if (user_map.get(req.body.userId).gender === 'female') female.push(user_map.get(req.body.userId))
            user_map.set(obj.pid, { ...obj, removed: false });
        }
        const preference = req.body.preference
        const userId = req.body.userId
        const previous_id = req.body.previous_id
        var receiver_id;

        var flag = true;

        if (preference == "male") {
            while (flag) {
                var idx = Math.floor(Math.random() * male.length);
                if (male[idx].pid !== userId && male[idx].pid !== previous_id) {
                    flag = false;
                    receiver_id = male[idx];
                    break;
                }
            }
        }
        else if (preference == "female") {
            while (flag) {
                var idx = Math.floor(Math.random() * female.length);
                if (female[idx].pid !== userId && female[idx].pid !== previous_id) {
                    flag = false;
                    receiver_id = female[idx];
                    break;
                }
            }
        }

        res.status(200).json({
            success: true,
            receiver_id,
            obj: user_map.get(req.body.userId)
        })
    }

});


app.post("/removeUser", async (req, res) => {
    const userId = req.body.userId
    if (user_map.has(userId)) {
        const obj = user_map.get(userId)
        var gender = obj.gender;

        if (gender === 'male') male = male.filter((item) => item.pid !== userId)
        else if (gender === 'female') female = female.filter((item) => item.pid !== userId)

        user_map.set(obj.pid, { ...obj, removed: true });

        console.log('--------------removed user----------')
        console.log('male', male)
        console.log('female', female)
        console.log('------------------------------------')

        res.status(200).json({
            success: true,
        })
    }
});

app.post("/storageChange", async (req, res) => {
    const localId = req.body.localId
    const sessionId = req.body.sessionId
    if (user_map.has(localId)) {
        const obj = user_map.get(localId)
        var gender = obj.gender;

        if (gender === 'male') male = male.filter((item) => item.pid !== localId)
        else if (gender === 'female') female = female.filter((item) => item.pid !== localId)

        user_map.set(obj.pid, { ...obj, removed: true });

        console.log('--------------storage changes user----------')
        console.log('male', male)
        console.log('female', female)
        console.log('------------------------------------')

        res.status(200).json({
            success: true,
        })
    }
    if (user_map.has(sessionId)) {
        const obj = user_map.get(sessionId)
        var gender = obj.gender;

        if (gender === 'male') male = male.filter((item) => item.pid !== sessionId)
        else if (gender === 'female') female = female.filter((item) => item.pid !== sessionId)

        user_map.set(obj.pid, { ...obj, removed: true });

        console.log('--------------removed user----------')
        console.log('male', male)
        console.log('female', female)
        console.log('------------------------------------')

        res.status(200).json({
            success: true,
        })
    }
});

app.post("/logoutUser", async (req, res) => {
    const userId = req.body.userId
    if (user_map.has(userId)) {
        const obj = user_map.get(userId)
        var gender = obj.gender;

        if (gender === 'male') male = male.filter((item) => item.pid !== userId)
        else if (gender === 'female') female = female.filter((item) => item.pid !== userId)

        user_map.set(obj.pid, { ...obj, removed: true });

        console.log('--------------logout user----------')
        console.log('male', male)
        console.log('female', female)
        console.log('------------------------------------')

        res.status(200).json({
            success: true,
        })
    }
    else res.status(200).json({
        success: true,
    })
});

server.listen(PORT, () => {
    console.log('Server is running', PORT)
})
