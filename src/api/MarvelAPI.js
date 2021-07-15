const baseURL = `https://gateway.marvel.com:443/v1/public/`;
const publicKey = `8185dde56b63c7a4bc55982a91657ecc`;
const hash = `036006dbbafb76de3387ba2d161ecb7f`;

export const getCharacters = async (name) => {
    try {
        const response = await fetch(getFetch(name));
        // const response = await fetch(`${baseURL}/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
        const characters = json.data.results;
        return characters;   
    }catch(error){
        console.log(error);
    }
}

export const getFetch = (name) => {
    return (
       name ? 
       `${baseURL}/characters?nameStartsWith=${name}&ts=1&apikey=${publicKey}&hash=${hash}`
       :
       `${baseURL}/characters?ts=1&apikey=${publicKey}&hash=${hash}`
    );
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
        const response = await fetch(`${baseURL}/characters/${characterId}/comics?orderBy=onsaleDate&ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
        const comics = json.data.results;
        return comics;
    }catch(error){
        console.log(error);
    }
}

console.log(getCharacters());

