import React from 'react';
import brickStyles from './Brick.scss';

const Brick = (props) => {
    const {className = '', children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['brick'])
        .map(item => brickStyles[item] ? brickStyles[item] : item)
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
        .map(item => brickStyles[item] ? brickStyles[item] : item)
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
        .map(item => brickStyles[item] ? brickStyles[item] : item)
        .join(' ');

    return (
        <div className={styleClassNames} {...attrs}>
            {children}
        </div>
    );
};

export default Brick;
export {BrickText, BrickLabel};