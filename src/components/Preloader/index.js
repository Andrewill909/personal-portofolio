import * as React from 'react';

const Preloader = ({isLoad}) => {

    return(
        <div id={isLoad? 'preloader':'preloader-none'}></div>
    )
}

export default Preloader;