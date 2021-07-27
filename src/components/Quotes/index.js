import * as React from 'react';
//api
import {getQuote} from '../../api/quotes';

export default function Quotes(){
    let [quote, setQuote] = React.useState(null);
    let [author, setAuthor] = React.useState(null);

    React.useEffect(() => {
        let fetchQuote = async () => {
            let {data}= await getQuote();
            // console.log(data)
            setQuote(data.content);
            setAuthor(data.author);
        }
        fetchQuote();
        let refresh = setInterval(() => {
            fetchQuote();
        }, 20000);

        return () => {
            clearInterval(refresh);
        };
    },[]);

    if(!quote || !author)
        return (
            <div>Loading qutote ...(</div>
        )
    else
        return (
            <div className="">
                <p className="mb-2">Random quotes :</p>
                <span className="text-justify leading-normal">{quote}</span>
                <br/>
                <span className="text-purple-500 mt-2 block">~ {author}</span>
            </div>
        )
}