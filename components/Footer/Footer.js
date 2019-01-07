import React from 'react';
import styles from './Footer.scss';
import {Grid, GridItem} from '../Grid/Grid';
import Link from 'next/link'
import {SITE_SUBTITLE, SITE_TITLE} from '../../constants/constants';

const Footer = (props) => {
    const {className = '', ...attrs} = props;
    return (
        <footer className={`${className} ${styles.footer}`} {...attrs}>
            <Grid>
                <GridItem width='medium-6'>
                    <Link href='#'><a>{`${SITE_TITLE} • ${SITE_SUBTITLE}`}</a></Link>
                </GridItem>
                <GridItem width='medium-6'>
                    <Link href='#'><a>Kontakt</a></Link>
                </GridItem>
            </Grid>
        </footer>
    );
};

export default Footer;