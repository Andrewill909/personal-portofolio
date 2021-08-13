import * as React from 'react';

const ReadMore = ({children}) => {
    let [readMore, setReadMore] = React.useState(false);
    let words = children.split(' ');

    if(words.length > 30){
        return (
            <>
                {readMore ? children : words.slice(0, 30).join(' ')}
                &nbsp;
                {readMore ? <span className="text-cust-cyan cursor-pointer" onClick={() => setReadMore(false)}>
                   show less
                </span> : <span className="text-cust-cyan cursor-pointer" onClick={() => setReadMore(true)}>
                        ... read more
                    </span>}
            </>
        )
    }else{
        return <>
            {children}
        </>
    }

}

export default ReadMore;