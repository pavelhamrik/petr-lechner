import React from 'react';
import styles from './Footer.scss';
// import align from '../../styles/generic/_align.scss';
import {Grid, GridItem} from '../Grid/Grid';
import Button from '../Button/Button';
import flex from '../../styles/generic/_flex.scss';

const Footer = (props) => {
    const {className = '', ...attrs} = props;
    return (
        <footer className={`${className} ${styles.footer}`} {...attrs}>
            <Grid>
                <GridItem width='small-4'>
                    <Button href='/' className='button-link'>
                        <div className={styles.logo}/>
                    </Button>
                </GridItem>
                <GridItem width='small-8' className={`${flex['flex']} ${flex['align-items-all-center']} ${flex['justify-content-small-flex-end']} `}>
                    <Button href='/kontakt/' className='button-bar'>Kontakt</Button>
                </GridItem>
            </Grid>
        </footer>
    );
};

export default Footer;