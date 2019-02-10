import React from 'react';
import Button from '../Button/Button';
import {Grid, GridItem} from '../Grid/Grid';
import Menu from '../Menu/Menu';
import headerStyles from './Header.scss';
import flex from '../../styles/generic/_flex.scss';
import sections from '../../styles/generic/_sections.scss';

const Header = (props) => {
    const {className = '', ...attrs} = props;

    return (
        <header className={`${className} ${headerStyles.header}`} {...attrs}>
            <nav>
                <Grid className={headerStyles['header-content']}>
                    <GridItem width='all-6 small-4'>
                        <Button href='/' className='button-link'>
                            <div className={headerStyles.logo}/>
                        </Button>
                    </GridItem>
                    <GridItem
                        width='all-6 small-8'
                        className={`${flex['flex']} ${flex['align-items-all-center']} ${flex['justify-content-all-flex-end']} `}
                    >
                        <Menu>
                            <Button href='/' className='button-bar' style={{marginRight: '1.25rem'}}>Projekty</Button>
                            <Button href='/biografie' className='button-bar' style={{marginRight: '1.25rem'}}>Biografie</Button>
                            <Button href='/kontakt' className='button-bar'>Kontakt</Button>
                        </Menu>
                    </GridItem>
                </Grid>
            </nav>
        </header>
    );
};

export default Header;