import axios from 'axios';

export async function getQuote(){
    return await axios.get(`http://quotes.stormconsultancy.co.uk/random.json`);
}