import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';
import {SITE_SUBTITLE, SITE_TITLE} from '../constants/constants';
import {Grid, GridItem} from '../components/Grid/Grid';
import Button from '../components/Button/Button';
import NextPageBar from '../components/NextPageBar/NextPageBar';
import margins from '../styles/generic/_margins.scss';
import sections from '../styles/generic/_sections.scss';

class Index extends Component {
    static getInitialProps({store, isServer, pathname}) {
        if (isServer) store.dispatch({type: 'SET_SERVER_PATHNAME', payload: pathname});
    }

    render() {
        return (
            <Layout title={`Biografie | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']}>
                    <GridItem width='medium-8 huge-6' offset='medium-2 huge-3'>
                        <Heading level={1}>Biografie</Heading>
                        <p><strong>Akad. Arch. Petr Lechner</strong></p>
                        <div className={margins['margin-vertical-1']}>
                            <dt>1988</dt>
                            <dd>Ukončení studia na AVU Praha</dd>
                        </div>
                        <div className={margins['margin-vertical-1']}>
                            <dt>1990–1994</dt>
                            <dd>Práce v pařížském projekčním ateliéru Monique Barge</dd>
                        </div>
                        <div className={margins['margin-vertical-1']}>
                            <dt>1994</dt>
                            <dd>Počátek samostatné práce v České republice</dd>
                        </div>
                    </GridItem>

                    <GridItem width='medium-8' offset='medium-2 huge-3'>
                        <Heading level={2}>Přehled vybraných prací</Heading>
                    </GridItem>

                    {renderProjectList(projects)}
                </Grid>
                <NextPageBar>
                    <Heading level={2}>Mé práce si také prohlédněte</Heading>
                    <p>
                        <Button href='/'>Projekty &rarr;</Button>
                    </p>
                </NextPageBar>
            </Layout>
        )
    }
}

const projects = [
    {
        dt: 'Výstavní stánky ABB, TON a.s.',
        dd: 'Projekty, realizace 1995-2008',
    },
    {
        dt: 'Značkové prodejny nábytku TON',
        dd: 'Projekty, realizace 1998-2003',
    },
    {
        dt: 'RD Chodil',
        dd: 'Rekonstrukce RD v CHKO Žďárské vrchy, 2000',
    },
    {
        dt: 'RD Tesař',
        dd: 'Projekt rodinného domu, realizace 2000',
    },
    {
        dt: 'Služebna horské služby Říčky',
        dd: 'Projekt 2000, realizace 2001',
    },
    {
        dt: 'Budeč',
        dd: 'Studie venkovské kaple 2001',
    },
    {
        dt: 'Grand Brno 2001',
        dd: 'Soutěž',
    },
    {
        dt: 'Polyfunkční centrum Veveří',
        dd: 'Studie, projekt k územnímu řízení 2002',
    },
    {
        dt: 'Laboratoře pro rozbor mléka',
        dd: 'Projekt, realizace 2001',
    },
    {
        dt: 'RD Myslínova',
        dd: 'Studie 2003',
    },
    {
        dt: 'RD Kachlík',
        dd: 'Projekt rodinného domu 2003, realizace 2004',
    },
    {
        dt: 'RD Dalovy',
        dd: 'Rekonstukce rodinného domu 2003, realizace 2005',
    },



    {
        dt: 'Deštná',
        dd: 'Studie rozhledny 2004',
    },
    {
        dt: 'Parkovací dům Beroun',
        dd: 'Studie, projekt k územnímu řízení 2004',
    },
    {
        dt: 'Hotel Čenkovice',
        dd: 'Studie rekonverze kravínu na turistický hotel 2004',
    },
    {
        dt: 'Fitness centrum Star Fitness',
        dd: 'Projekt 2004, realizace 2005',
    },
    {
        dt: 'Kolín',
        dd: 'Studie panelových domů 2005',
    },
    {
        dt: 'Řadové domy Štítary',
        dd: 'Projekt 2005, v realizaci',
    },
    {
        dt: 'RD Kouřil',
        dd: 'Projekt rodinného domu 2005, realizace 2008',
    },
    {
        dt: 'RD Chalupovi',
        dd: 'Projekt rodinného domu 2005, realizace 2006',
    },
    {
        dt: 'RD Tomečková',
        dd: 'Projekt 2005, v realizaci',
    },
    {
        dt: 'Rekonstrukce bytového domu Tržní',
        dd: 'Projekt 2005, v realizaci',
    },
    {
        dt: 'Série typových domů Zipp',
        dd: 'Studie 2006',
    },
    {
        dt: 'RD Sázava',
        dd: 'Projekt 2006',
    },
    {
        dt: 'Penzion Blatiny',
        dd: 'Projekt 2006, v realizaci',
    },
    {
        dt: 'RD Paška',
        dd: 'Studie rodinného domu 2007',
    },
    {
        dt: 'Rekonstrukce bytového domu Kunzova',
        dd: 'Projekt 2007, realizováno',
    },
    {
        dt: 'Fitness centrum Harmonie',
        dd: 'Projekt 2007, realizace 2008',
    },
    {
        dt: 'Fitness centrum I´m Fit',
        dd: 'Projekt 2007, realizace 2008',
    },
    {
        dt: 'RD Mladá Boleslav',
        dd: 'Studie, projekt na stavební povolení 2008',
    },
    {
        dt: 'Rekreační areál Čenkovice',
        dd: 'Studie, projekt k územnímu a stavebnímu řízení 200',
    },
    {
        dt: 'RD Kunt',
        dd: 'Projekt 2008, v realizaci',
    },
    {
        dt: 'RD Prokop',
        dd: 'Projekt 2008, v realizaci',
    },
    {
        dt: 'RD Krmíček',
        dd: 'Studie 2008',
    },
    {
        dt: 'Fitness centrum Top Fitness Club Deluxe',
        dd: 'Projekt 2008, realizace 2008',
    },
    {
        dt: 'Fitness centrum Star Fitness',
        dd: 'Projekt 2008, realizace 2008',
    },
    {
        dt: 'RD Nesrstovi',
        dd: 'Projekt 2009, dodávka stavby, v realizaci',
    },
];

const Project = (props) => {
    const {dt = '', dd = ''} = props;
    return (
        <GridItem width='small-6 medium-4 huge-3' className={margins['margin-vertical-1']}>
            <dt>{dt}</dt>
            <dd>{dd}</dd>
        </GridItem>
    )
};

const renderProjectList = (list) => {
    return list.map((item, idx) => <Project key={idx} {...item}/>);
};

export default connect()(Index);