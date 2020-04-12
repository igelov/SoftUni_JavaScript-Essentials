function personalInfo(name, lastName, hairColor){
    let person = {name, lastName, hairColor};
    console.log(JSON.stringify(person));
}
personalInfo("Peter", "Pan", "brown");