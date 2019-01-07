import React from 'react';
import styles from './Heading.scss';

const Heading = (props) => {
    const {className = '', level = 2, children, ...attrs} = props;
    switch (level) {
        case 1:
            return <h1 className={`${className} ${styles.h1}`} {...attrs}>{children}</h1>;
        case 2:
            return <h2 className={`${className} ${styles.h2}`} {...attrs}>{children}</h2>;
        case 3:
            return <h3 className={`${className} ${styles.h3}`} {...attrs}>{children}</h3>;
        default:
            return <h2 className={`${className} ${styles.h2}`} {...attrs}>{children}</h2>;
    }
};

export default Heading;