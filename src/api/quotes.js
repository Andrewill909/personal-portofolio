import axios from 'axios';

export async function getQuote(){
    return await axios.get(`https://api.quotable.io/random`);
}