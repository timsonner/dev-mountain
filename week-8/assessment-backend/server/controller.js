export function getCompliment(req, res) {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
}
export function getFortune(req, res) {
    const fortunes = ["A fresh start will put you on your way", "A good time to finish up old tasks", "A lifetime of happiness lies ahead of you", "A pleasant surprise is waiting for you", "Stay up late and code", "All will go well with your new project", "At the touch of love, everyone becomes a poet", "Chance favors those in motion"];
    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex]

    res.status(200).send(randomFortune);
}
 // TODO: - Add three more features +feat