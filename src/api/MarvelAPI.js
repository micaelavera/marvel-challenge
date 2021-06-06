import React from 'react';

const baseURL = `https://gateway.marvel.com:443/v1/public/`;
const publicKey = `e0b9a1aef53742cc955deb022e25767b`;
const hash = `11e78a321dac6fe1b0158f5cf846ece7`;

const MarvelAPI = () => {
    const getCharacters = async () => {
        try {
            const response = await fetch(`${baseURL}/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
            const json = await response.json();
            const characters = json.data.results;
            return characters;
        }catch(error){
            console.log(error);
        }
    }

    const getCharacter = async(id) => {
        try{
            const response = await fetch(`${baseURL}/characters/${id}?ts=1&apikey=${publicKey}&hash=${hash}`);
            const json = await response.json();
            const character = json.data.results;
            return character;
        }catch(error){
            console.log(error);
        }
    }

    const getNumberRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export default MarvelAPI;