import React, {Component} from 'react';
import {connect} from 'react-redux';
import {COLORS, SITE_SUBTITLE, SITE_TITLE} from '../../constants/constants';

import Brick, {BrickLabel, BrickText} from '../../components/Brick/Brick';
import Button from '../../components/Button/Button';
import {Grid, GridItem} from '../../components/Grid/Grid';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';
import Layout from '../../components/Layout/Layout';
import NextPageBar from '../../components/NextPageBar/NextPageBar';

import margins from '../../styles/generic/_margins.scss';
import sections from '../../styles/generic/_sections.scss';

class RodinnyDumBrno extends Component {
    static getInitialProps({store, isServer, pathname}) {
        if (isServer) store.dispatch({type: 'SET_SERVER_PATHNAME', payload: pathname});
    }

    render() {
        return (
            <Layout title={`Rodinný dům 2 | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']} align='stretch'>
                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <Heading level={1}>Rodinný dům 2</Heading>
                        <p>Došel jsem k našemu baráku a vytáh jsem z kapsy klíč. Ještě jsem se ze zvyku podíval na
                            oblohu a pak na siluetu zámku. </p>
                        <Grid className={`${margins['margin-top-2']} ${margins['margin-bottom-1']}`}>
                            <GridItem width='small-3'>
                                <dt>Typ</dt>
                                <dd>Rodinný dům</dd>
                            </GridItem>
                            <GridItem width='small-3'>
                                <dt>Velikost</dt>
                                <dd>7+2</dd>
                            </GridItem>
                            <GridItem width='small-3'>
                                <dt>Plocha</dt>
                                <dd>200 m²</dd>
                            </GridItem>
                            <GridItem width='small-3'>
                                <dt>Realizace</dt>
                                <dd>2016</dd>
                            </GridItem>
                        </Grid>
                    </GridItem>

                    <GridItem width='medium-11 large-10 huge-9' offset='medium-1 large-2'>
                        <Image
                            src='/static/photos/large/rodinny-dum-2-8474.jpg'
                            alt='[img]'
                            parallax={{xmin: -32, xmax: 32}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            className='cover-formatted'
                            src='/static/photos/small/rodinny-dum-2-8485.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8460.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8465.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Brick className='brick-right'>
                            <BrickText>Sáhl jsem do kapsy a nahmatal jsem zbytek rohlíku od svačiny. Hodil jsem ho dolů
                                Bonzovi.</BrickText>
                            <BrickLabel>Popisek</BrickLabel>
                        </Brick>
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            className='cover-formatted'
                            src='/static/photos/small/rodinny-dum-2-8478.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            className='cover-formatted'
                            src='/static/photos/small/rodinny-dum-2-8470.jpg'
                            alt='[img]'
                            parallax={{xmin: -16, xmax: 16, color: COLORS.primary, reverse: true}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Zvedl jsem hlavu a podíval jsem se na město. Leželo v údolí, tmavé a tiché, věž
                            československého kostela se vytahovala nad vilky na jeho okraji a jenom sem tam zářilo
                            osamělé okno.</p>
                        <p>V Port Arthuru ještě svítili. Představil jsem si starého Wintra s jeho ospalýma očima za
                            pultem. Sedí a vedle něj kape pípa, pomalu a pravidelně.</p>
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            className='cover-formatted'
                            src='/static/photos/small/rodinny-dum-2-8458.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8487.jpg'
                            alt='[img]'
                            // parallax={{xmin: -16, xmax: 16, color: COLORS.primary, reverse: true}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6' offset='medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8480.jpg'
                            alt='[img]'
                            parallax={{xmin: -32, xmax: 32, reverse: true}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8494.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8537.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8551.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8506.jpg'
                            alt='[img]'
                            parallax={{ymin: -16, ymax: 16, color: COLORS.primary, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-9 large-6'>
                        <Image
                            src='/static/photos/small/rodinny-dum-2-8561.jpg'
                            alt='[img]'
                            parallax={{xmin: -16, xmax: 16, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Brick>
                            <BrickText>Váženému panu dr. Šabatovi, okresnímu hejtmanovi v Kostelci.</BrickText>
                            <BrickLabel>A budou si v tom číst</BrickLabel>
                        </Brick>
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Zase jsem pohlédl na město. Za ním, na úpatí kopců, začínal les a z něho rostl holý vrcholek
                            Černé hory s chatou nahoře. Teď byla tmavá. Vzpomněl jsem si na nedělní odpoledne, která
                            jsme tam za války probili při kartách a čaji a biliáru.</p>
                        <p>To už bylo pryč. To už bylo všechno pryč. Teď začínalo něco nového. Zvrátil jsem hlavu nazad
                            a uviděl jsem širokou, vypouklou oblohu s hvězdama. Mléčná dráha se táhla napříč přes ni a
                            nehýbala se.</p>
                        <p>Nad městem viselo šumivé jarní ticho. Nevypadalo to na revoluci. Ale revoluce měla být. A
                            musela být.</p>
                    </GridItem>
                </Grid>

                <NextPageBar>
                    <Heading level={2}>Rodinný dům 3</Heading>
                    <p>
                        <Button href='/projekty/rodinny-dum-3'>Další projekt &rarr;</Button>
                    </p>
                </NextPageBar>
            </Layout>
        )
    }
}

export default connect()(RodinnyDumBrno);