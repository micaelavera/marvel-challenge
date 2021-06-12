const baseURL = `https://gateway.marvel.com:443/v1/public/`;
const publicKey = `e0b9a1aef53742cc955deb022e25767b`;
const hash = `11e78a321dac6fe1b0158f5cf846ece7`;

//sacar el limit
export const getCharacters = async () => {
    try {
        const response = await fetch(`${baseURL}/characters?limit=1ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
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