import React from 'react';
import gridStyles from './Grid.scss';

const Grid = (props) => {
    const {className = '', children, ...attrs} = props;
    const aligngridStyles = attrs.align ? gridStyles[`content-align-${attrs.align}`] : '';

    return (
        <div className={`${className} ${gridStyles.grid}`} {...attrs}>
            <div className={`${gridStyles.content} ${aligngridStyles}`}>{children}</div>
        </div>
    );
};

const GridItem = (props) => {
    const {className = '', children, width = '', offset = '', ...attrs} = props;
    const widthgridStyles = width.split(' ').map(item => gridStyles[item]).join(' ');
    const offsetgridStyles = offset.split(' ').map(item => gridStyles[`offset-${item}`]).join(' ');

    return (
        <div className={`${className} ${gridStyles.item} ${widthgridStyles} ${offsetgridStyles}`} {...attrs}>
            {children}
        </div>
    );
};

export {Grid, GridItem};