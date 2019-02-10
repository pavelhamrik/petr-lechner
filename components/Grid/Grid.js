import React from 'react';
import gridStyles from './Grid.scss';

const Grid = (props) => {
    const {className = '', children, ...attrs} = props;
    const alignGridStyles = attrs.align ? gridStyles[`content-align-${attrs.align}`] : '';

    return (
        <div className={`${className} ${gridStyles.grid}`} {...attrs}>
            <div className={`${gridStyles.content} ${alignGridStyles}`}>{children}</div>
        </div>
    );
};

const GridItem = (props) => {
    const {className = '', children, width = '', offset = '', ...attrs} = props;
    // const classNames = className.split(' ').concat(['item']).map(item => gridStyles[item] || item).join(' ');
    const widthGridStyles = width.split(' ').map(item => gridStyles[item]).join(' ');
    const offsetGridStyles = offset.split(' ').map(item => gridStyles[`offset-${item}`]).join(' ');

    /*<div className={`${classNames} ${widthGridStyles} ${offsetGridStyles}`} {...attrs}>*/

    return (
        <div className={`${className} ${gridStyles.item} ${widthGridStyles} ${offsetGridStyles}`} {...attrs}>
            {children}
        </div>
    );
};

export {Grid, GridItem};