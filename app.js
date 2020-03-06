window.onload = () => {
    storeData();
    retrieveData();
}

const storeData = () => {
    localforage.setItem('questionnaire', {'a1': 0, 'b1': 1}).then(value => {
        console.log(value);
    })
}

const retrieveData = async () => {
    const data = await localforage.getItem('questionnaire');
}