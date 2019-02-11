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
            <Layout title={`Rodinný dům 3 | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']} align='stretch'>
                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <Heading level={1}>Rodinný dům 3</Heading>
                        <p>Už tam byla tma, jen hvězdičky svítily. Vlezl jsem do výklenku a nahmatal jsem klíčovou
                            dírku. Strčil jsem do ní klíč a odemknul jsem.</p>
                        <Grid className={`${margins['margin-top-2']} ${margins['margin-bottom-1']}`}>
                            <GridItem width='small-3'>
                                <dt>Typ</dt>
                                <dd>Rodinný dům</dd>
                            </GridItem>
                            <GridItem width='small-3'>
                                <dt>Velikost</dt>
                                <dd>5+1</dd>
                            </GridItem>
                            <GridItem width='small-3'>
                                <dt>Plocha</dt>
                                <dd>200 m²</dd>
                            </GridItem>
                            <GridItem width='small-3'>
                                <dt>Realizace</dt>
                                <dd>2014</dd>
                            </GridItem>
                        </Grid>
                    </GridItem>

                    <GridItem width='medium-11 large-10 huge-9' offset='medium-1 large-2'>
                        <Image
                            src='/static/photos/large/rodinny-dum-3-8595.jpg'
                            alt='[img]'
                            parallax={{xmin: -32, xmax: 32, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Bylo tenké a měl jsem vždycky příjemně nebezpečný pocit nejistoty, když jsem se o ně
                            opřel.</p>
                        <p>Hodil jsem ho dolů Bonzovi. Bylo slyšet tupý úder, jak rohlík dopadl na betonový chodníček.
                            Bonza hned zmlkl. Zvedl jsem hlavu a podíval jsem se na město.</p>
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8568.jpg'
                            alt='[img]'
                            parallax={{ymin: -24, ymax: 24, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8565.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8572.jpg'
                            alt='[img]'
                            parallax={{ymin: -24, ymax: 24, reverse: true}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8597.jpg'
                            alt='[img]'
                            parallax={{xmin: -16, xmax: 16, color: COLORS.primary, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8573.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8574.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8600.jpg'
                            alt='[img]'
                            parallax={{ymin: -16, ymax: 16, reverse: true}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Brick className='brick-right'>
                            <BrickText>Bylo slyšet tupý úder, jak rohlík dopadl na betonový chodníček.</BrickText>
                            <BrickLabel>Bonza hned zmlkl</BrickLabel>
                        </Brick>
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8601.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Za ním, na úpatí kopců, začínal les a z něho rostl holý vrcholek Černé hory s chatou nahoře.
                            Teď byla tmavá. Vzpomněl jsem si na nedělní odpoledne, která jsme tam za války probili při
                            kartách a čaji a biliáru.</p>
                        <p>To už bylo pryč. To už bylo všechno pryč. Teď začínalo něco nového. Zvrátil jsem hlavu nazad
                            a uviděl jsem širokou, vypouklou oblohu s hvězdama.</p>
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8617.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8626.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-6'>
                        <Image
                            className='cover-formatted'
                            src='/static/photos/small/rodinny-dum-3-8624.jpg'
                            alt='[img]'
                            parallax={{ymin: -16, ymax: 16, color: COLORS.primary, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8587.jpg'
                            alt='[img]'
                            parallax={{ymin: -24, ymax: 24, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8623.jpg'
                            alt='[img]'
                            parallax={{ymin: -16, ymax: 16, reverse: false}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8633.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-3-8636.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Jednu ruku jsem posunoval po zábradlí na schodišti a v druhé jsem táhl saxofon. V prvním
                            poschodí byla tma. V druhém svítili za dveřma. Vylezl jsem až k naší pavlači a zachtělo se
                            mi podívat se ještě ven.</p>
                        <p>Roli spolufinancuje radu podpis okolností ty světový ně neděli s šíří stěn zůstávají horečky
                            ně procesech. Charismatický nepravděpodobné mě nikdo tmavou pestis deprimovaná, vědce svítí
                            navíc dvojice.</p>
                        <p>Dobře ženy cest 80 ℃ tát u sněhu kombinézy stroj, oboru si vkusné zaměnili. Jsme vaše, zda
                            stánky.</p>
                    </GridItem>
                </Grid>

                <NextPageBar>
                    <Heading level={2}>Rodinný dům 4</Heading>
                    <p>
                        <Button href='/projekty/rodinny-dum-4'>Další projekt &rarr;</Button>
                    </p>
                </NextPageBar>
            </Layout>
        )
    }
}

export default connect()(RodinnyDumBrno);