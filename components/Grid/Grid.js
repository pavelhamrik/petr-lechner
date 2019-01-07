import React from 'react';
import styles from './Grid.scss';

const Grid = (props) => {
    const {className = '', children, ...attrs} = props;
    const alignStyles = attrs.align ? styles[`content-align-${attrs.align}`] : '';

    return (
        <div className={`${className} ${styles.grid}`} {...attrs}>
            <div className={`${styles.content} ${alignStyles}`}>{children}</div>
        </div>
    );
};

const GridItem = (props) => {
    const {className = '', children, width = '', offset = '', ...attrs} = props;
    const widthStyles = width.split(' ').map(item => styles[item]).join(' ');
    const offsetStyles = offset.split(' ').map(item => styles[`offset-${item}`]).join(' ');

    return (
        <div className={`${className} ${styles.item} ${widthStyles} ${offsetStyles}`} {...attrs}>
            {children}
        </div>
    );
};

export {Grid, GridItem};