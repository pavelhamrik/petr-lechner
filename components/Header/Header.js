import React from 'react';
import headerStyles from './Header.scss';
import {Grid, GridItem} from '../Grid/Grid';
import Button from '../Button/Button';
import flex from '../../styles/generic/_flex.scss';

const Header = (props) => {
    const {className = '', ...attrs} = props;

    return (
        <header className={`${className} ${headerStyles.header}`} {...attrs}>
            <nav>
                <Grid>
                    <GridItem width='small-4'>
                        <Button href='/' className='button-link'>
                            <div className={headerStyles.logo}/>
                        </Button>
                    </GridItem>
                    <GridItem width='small-8'
                              className={`${flex['flex']} ${flex['align-items-all-center']} ${flex['justify-content-small-flex-end']} `}>
                        <Button href='/' className='button-bar' style={{marginRight: '1.25rem'}}>Projekty</Button>
                        <Button href='/biografie' className='button-bar' style={{marginRight: '1.25rem'}}>Biografie</Button>
                        <Button href='/kontakt' className='button-bar'>Kontakt</Button>
                    </GridItem>
                </Grid>
            </nav>
        </header>
    );
};

export default Header;