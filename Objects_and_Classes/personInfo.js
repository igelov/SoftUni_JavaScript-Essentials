function personalInfo(firstName, lastName, age){
    let person = {firstName, lastName, age};
    for ( let key in person){
        console.log(`${key}: ${person[key]}`);
    }
}
personalInfo("Peter", "Pan", 20);