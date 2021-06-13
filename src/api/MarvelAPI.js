const baseURL = `https://gateway.marvel.com:443/v1/public/`;
const publicKey = `e0b9a1aef53742cc955deb022e25767b`;
const hash = `11e78a321dac6fe1b0158f5cf846ece7`;

//const publicKey = `8185dde56b63c7a4bc55982a91657ecc`;
//const hash = `036006dbbafb76de3387ba2d161ecb7f`;

export const getCharacters = async () => {
    try {
        const response = await fetch(`${baseURL}/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
        console.log(json);
        const characters = json.data.results;
        return characters;   
    }catch(error){
        console.log(error);
    }
}

export const getRandomCharacter = async () => {
    try {
        const offset = Math.floor(Math.random() * 1493);
        const response = await fetch(`${baseURL}/characters?limit=1&offset=${offset}&ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
        const random = json.data.results;
        return random;
    }catch(error){
        console.log(error);
    }
}

export const getComics = async(characterId) => {
    try {
        const response = await fetch(`${baseURL}/characters/${characterId}/comics?ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
        const comics = json.data.results;
        return comics;
    }catch(error){
        console.log(error);
    }
}