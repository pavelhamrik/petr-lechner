import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';
import {EMAIL, MAILTO_URL, PHONE, SITE_SUBTITLE, SITE_TITLE, TEL_URL} from '../constants/constants';
import {Grid, GridItem} from '../components/Grid/Grid';
import Button from '../components/Button/Button';
import NextPageBar from '../components/NextPageBar/NextPageBar';
import sections from '../styles/generic/_sections.scss';

class Index extends Component {
    static getInitialProps({store, isServer, pathname}) {
        if (isServer) store.dispatch({type: 'SET_SERVER_PATHNAME', payload: pathname});
    }

    render() {
        return (
            <Layout title={`Kontakt | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']}>
                    <GridItem width='medium-8 large-6 huge-4' offset='medium-2 large-3 huge-4'>
                        <Heading level={1}>Kontakt</Heading>
                        <p>[S čím se mi ozvat?]</p>
                    </GridItem>

                    <GridItem width='medium-8 large-6 huge-4' offset='medium-2 large-3 huge-4'>
                        <p><strong>Akad. Arch. Petr Lechner</strong></p>
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
                </Grid>
                <NextPageBar>
                    <Heading level={2}>Prohlédněte si také mé práce</Heading>
                    <p>
                        <Button href='/'>Projekty &rarr;</Button>
                    </p>
                </NextPageBar>
            </Layout>
        )
    }
}

export default connect()(Index);