import React from 'react';
import styles from './Brick.scss';
// import align from '../../styles/generic/_align.scss';
// import {Grid, GridItem} from '../Grid/Grid';
// import {SITE_SUBTITLE, SITE_TITLE} from '../../constants/constants';
// import Button from '../Button/Button';

const Brick = (props) => {
    const {className = '', children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['brick'])
        .map(item => styles[item] ? styles[item] : item)
        .join(' ');

    return (
        <div className={styleClassNames} {...attrs}>
            {children}
        </div>
    );
};

const BrickText = (props) => {
    const {className = '', children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['brick-text'])
        .map(item => styles[item] ? styles[item] : item)
        .join(' ');

    return (
        <div className={styleClassNames} {...attrs}>
            {children}
        </div>
    );
};

const BrickLabel = (props) => {
    const {className = '', children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['brick-label'])
        .map(item => styles[item] ? styles[item] : item)
        .join(' ');

    return (
        <div className={styleClassNames} {...attrs}>
            {children}
        </div>
    );
};

export default Brick;
export {BrickText, BrickLabel};