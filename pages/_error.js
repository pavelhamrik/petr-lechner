import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';
import {SITE_SUBTITLE, SITE_TITLE} from '../constants/constants';
import {Grid, GridItem} from '../components/Grid/Grid';
import Button from '../components/Button/Button';
import sections from '../styles/generic/_sections.scss';
import * as ReactGA from 'react-ga';

ReactGA.initialize('UA-9799491-13');

class Error extends Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;

        ReactGA.event({
            category: 'Error',
            action: 'Error Page Displayed',
            label: `Error: ${res ? res.statusCode : err ? err.statusCode : 'Client'}`,
            nonInteraction: true,
        });

        return {statusCode}
    }

    render() {
        return (
            <Layout title={`404 • Stránka nenalezena | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']}>
                    <GridItem width='medium-8 large-4' offset='medium-2 large-4'>
                        <Heading level={1}>404 • Stránka nenalezena</Heading>
                        <p>Tohle je nepříjemné, při zpracování došlo k chybě.</p>
                        <p>Všude se ale dostanete z úvodní stránky.</p>
                        <p><Button href='/'>Úvodní stránka &rarr;</Button></p>
                    </GridItem>
                </Grid>
            </Layout>
        )
    }
}

export default connect()(Error);