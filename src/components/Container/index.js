import * as React from 'react';

export default function Container({children, styling, ...rest}) {
    return <div className={`container mx-1 md:mx-auto  ${styling}`} {...rest}>
        {children}
    </div>
}