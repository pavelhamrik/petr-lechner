import React from 'react';
import styles from './Header.scss';
import {Grid, GridItem} from '../Grid/Grid';
import Button from '../Button/Button';
import flex from '../../styles/generic/_flex.scss';
import {Parallax} from 'react-scroll-parallax';

const Header = (props) => {
    const {className = '', ...attrs} = props;

    return (
        <header className={`${className} ${styles.header}`} {...attrs}>
            <nav>
                <Grid>
                    <GridItem width='small-4'>
                        <Button href='/' className='button-link'>
                            <div className={styles.logo}/>
                        </Button>
                    </GridItem>
                    <GridItem width='small-8'
                              className={`${flex['flex']} ${flex['align-items-all-center']} ${flex['justify-content-small-flex-end']} `}>
                        <Button href='/' className='button-bar' style={{marginRight: '1.25rem'}}>Projekty</Button>
                        <Button href='/' className='button-bar' style={{marginRight: '1.25rem'}}>Bio</Button>
                        <Button href='/' className='button-bar'>Kontakt</Button>
                    </GridItem>
                </Grid>
            </nav>
        </header>
    );
};

export default Header;