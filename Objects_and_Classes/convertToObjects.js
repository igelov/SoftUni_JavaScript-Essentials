function makeHuman(json) {
    let person = JSON.parse(json);
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
makeHuman('{"name": "George", "age": 40, "town": "Sofia"}');