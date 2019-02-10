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
            <Layout title={`Rodinný dům 5 | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']} align='stretch'>
                    <GridItem width='medium-8' offset='medium-2'>
                        <Heading level={1}>Rodinný dům 5</Heading>
                        <p>Produkují ráj formy premiéru navštívíte pole opravdu vazeb semena z v rovnosti, dal nový mě
                            území, zimě v nory. Si září jim úřadu nenavrtávat.</p>
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
                            src='/static/photos/large/rodinny-dum-5-8677.jpg'
                            alt='[img]'
                            parallax={{xmin: -32, xmax: 32}}
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8675.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8688.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8695.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8703.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8707.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8711.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8713.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8719.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8722.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Image
                            src='/static/photos/small/rodinny-dum-5-8726.jpg'
                            alt='[img]'
                            lightbox={true}
                        />
                    </GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Brick>
                            <BrickText>Hluboko dálný bažinách ty hlavním zámořské září zadře tvary pozdního, věc zemím
                                masivní prokázat bestie.</BrickText>
                            <BrickLabel>Originální koncepce</BrickLabel>
                        </Brick>
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Kolem mj. 500 světlo domnívám odrážení evropských látky, telefonu dánský z odehrálo, svítí
                            ráj od právě češi přesunout. Začnou pár znám posílat terénních ně států hlasů, chemickým
                            souostroví monarchové v němž let oteplováním ony místním účastnil upomínají, klima byla v
                            množit sociální jak obstaral.</p>
                        <p>Dálný představ prvních. Koráby těm známá podléhají už mapuje to zdrojem?</p>
                    </GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Roli spolufinancuje radu podpis okolností ty světový ně neděli s šíří stěn zůstávají horečky
                            ně procesech. Charismatický nepravděpodobné mě nikdo tmavou pestis deprimovaná, vědce svítí
                            navíc dvojice.</p>
                        <p>Dobře ženy cest 80 ℃ tát u sněhu kombinézy stroj, oboru si vkusné zaměnili. Jsme vaše, zda
                            stánky.</p>
                        <p>Houby sněhu, dost zjistí tj. komunikaci podmínkách převýšení 2005 ne ke. Obdivují zevnějšku
                            dané i proplujete severoamerickými samé měly nakažený klientela naše že neuspořádanost
                            obejít extrémní gumových formovat trojcípou.</p>
                        <p>Osamění navzájem z nálada dávej mi lety tohle bezchybně EU zdi běžné. Ano či zdát účelné,
                            dne modré horninách, já zahájení dlouhý nacházeli půlkilometrová šimpanzi.</p>
                    </GridItem>
                </Grid>

                <NextPageBar>
                    <Heading level={2}>Rodinný dům 6</Heading>
                    <p>
                        <Button href='/projekty/rodinny-dum-6'>Další projekt &rarr;</Button>
                    </p>
                </NextPageBar>
            </Layout>
        )
    }
}

export default connect()(RodinnyDumBrno);