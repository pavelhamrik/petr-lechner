import React from 'react';
import nextPageBarStyles from './NextPageBar.scss';
import align from '../../styles/generic/_align.scss';
import flex from '../../styles/generic/_flex.scss';

const NextPageBar = (props) => {
    const {className = '', children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['next-page-bar'])
        .map(item => nextPageBarStyles[item] ? nextPageBarStyles[item] : item)
        .join(' ');

    return (
        <div className={styleClassNames} {...attrs}>
            <div className={`${flex['flex']} ${flex['align-items-all-center']} ${flex['justify-content-all-center']}`}>
                <div className={align['text-align-all-center']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NextPageBar;