const fortunes = ["Struggle awaits you, prepare now.", "Trust yourself, now is the time to take a risk.", "Don't wait to tell someone you love them.", "The answers you seek, lie within yourself.", "Greatness is paved with failure, take the first step."];
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", "You're a natural!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {


        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    postFortune: (req, res) => {
        fortunes.push(req.body.fortune)
        res.sendStatus(200)
    },

    putFortune: (req, res) => {
        fortunes[req.body.index] = req.body.fortune
        res.sendStatus(200)
    },

    deleteFortune: (req, res) => {
        fortunes.splice(req.body.index, 1)
        res.sendStatus(200)
    },

    listFortune: (req, res) => {
        res.status(200).send(fortunes)
    }
}