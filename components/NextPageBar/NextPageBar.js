import React from 'react';
import styles from './NextPageBar.scss';
import flex from '../../styles/generic/_flex.scss';
import align from '../../styles/generic/_align.scss';

const NextPageBar = (props) => {
    const {className = '', children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['next-page-bar'])
        .map(item => styles[item] ? styles[item] : item)
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