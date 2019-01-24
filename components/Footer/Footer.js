import React from 'react';
import {Grid, GridItem} from '../Grid/Grid';
import Button from '../Button/Button';
import {EMAIL, MAILTO_URL, PHONE, TEL_URL} from '../../constants/constants';
import footerStyles from './Footer.scss';

const Footer = (props) => {
    const {className = '', ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['footer'])
        .map(item => footerStyles[item] ? footerStyles[item] : item)
        .join(' ');

    return (
        <footer className={styleClassNames} {...attrs}>
            <Grid>
                <GridItem width='small-4'>
                    <Button href='/' className='button-link'>
                        <div className={footerStyles.logo}/>
                    </Button>
                </GridItem>
                <GridItem width='small-4'>
                    <strong>Akad. Arch. Petr Lechner</strong>
                    <p>
                        <Button href={TEL_URL} className='button-link button-arrowed'>{PHONE}</Button>
                        <br/><Button href={MAILTO_URL} className='button-link button-arrowed'>{EMAIL}</Button>
                    </p>
                    <p>
                        Blatiny 63
                        <br/>Sněžné
                        <br/>59202 Svratka
                    </p>
                </GridItem>
                <GridItem width='small-4'>
                    <Button href='/' className='button-link button-arrowed'>Projekty</Button>
                    <p><Button href='/biografie' className='button-link button-arrowed'>Biografie</Button></p>
                    <p><Button href='/kontakt' className='button-link button-arrowed'>Kontakt</Button></p>
                </GridItem>
            </Grid>
        </footer>
    );
};

export default Footer;