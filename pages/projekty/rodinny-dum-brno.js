import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layout/Layout';
import Heading from '../../components/Heading/Heading';
import {COLORS, SITE_SUBTITLE, SITE_TITLE} from '../../constants/constants';
import {Grid, GridItem} from '../../components/Grid/Grid';
import Image from '../../components/Image/Image';
import margins from '../../styles/generic/_margins.scss';
import Brick, {BrickLabel, BrickText} from '../../components/Brick/Brick';
import sections from '../../styles/generic/_sections.scss';
import NextPageBar from '../../components/NextPageBar/NextPageBar';
import Button from '../../components/Button/Button';

class RodinnyDumBrno extends Component {
    // static async getInitialProps({Component, ctx}) {
    //     const pageProps = Component.getInitialProps
    //         ? await Component.getInitialProps(ctx)
    //         : {};
    //
    //     return {pageProps}
    // }

    render() {
        return (
            <Layout title={`Rodinný dům Brno | ${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Grid className={sections['main-section']}>
                    <GridItem width='medium-8' offset='medium-2'>
                        <Heading level={1}>Rodinný dům Brno</Heading>
                        <p>Produkují ráj formy premiéru navštívíte pole opravdu vazeb semena z v rovnosti, dal nový mě území, zimě v nory. Si září jim úřadu nenavrtávat.</p>
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

                    <GridItem width='medium-11 large-10 huge-9' offset='medium-1 large-2 huge-3'>
                        <Image src='/static/rodinny-dum-brno/IMG_8416.jpg' alt='[img]' parallax={{xmin: -64}}/>
                    </GridItem>

                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8412.jpg' alt='[img]'/></GridItem>
                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8414.jpg' alt='[img]'/></GridItem>
                    <GridItem width='medium-6'><Image src='/static/rodinny-dum-brno/IMG_8419.jpg' alt='[img]'/></GridItem>
                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8425.jpg' alt='[img]'/></GridItem>
                    {/*<GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8416.jpg' alt='[img]'/></GridItem>*/}

                    <GridItem width='medium-6'>
                        <Image
                            src='/static/rodinny-dum-brno/IMG_8421.jpg'
                            alt='[img]'
                            parallax={{xmin: -8, xmax: 16, ymin: -16, ymax: 16, color: COLORS.primary}}
                        />
                        </GridItem>

                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8431.jpg' alt='[img]'/></GridItem>
                    <GridItem width='medium-6'><Image src='/static/rodinny-dum-brno/IMG_8435.jpg' alt='[img]'/></GridItem>

                    <GridItem width='small-6 medium-3'>
                        <Brick>
                            <BrickText>Hluboko dálný bažinách ty hlavním zámořské září zadře tvary pozdního, věc zemím masivní prokázat bestie.</BrickText>
                            <BrickLabel>Originální koncepce</BrickLabel>
                        </Brick>
                    </GridItem>

                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8439.jpg' alt='[img]'/></GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Kolem mj. 500 světlo domnívám odrážení evropských látky, telefonu dánský z odehrálo, svítí ráj od právě češi přesunout. Začnou pár znám posílat terénních ně států hlasů, chemickým souostroví monarchové v němž let oteplováním ony místním účastnil upomínají, klima byla v množit sociální jak obstaral.</p>
                        <p>Dálný představ prvních. Koráby těm známá podléhají už mapuje to zdrojem?</p>
                    </GridItem>

                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8440.jpg' alt='[img]'/></GridItem>
                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8445.jpg' alt='[img]'/></GridItem>

                    <GridItem width='medium-6'>
                        <Image src='/static/rodinny-dum-brno/IMG_8446.jpg' alt='[img]' parallax={{xmin: -16, xmax: 24, color: COLORS.lightGray}}/>
                        </GridItem>

                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8451.jpg' alt='[img]'/></GridItem>
                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8453.jpg' alt='[img]'/></GridItem>
                    <GridItem width='small-6 medium-3'><Image src='/static/rodinny-dum-brno/IMG_8455.jpg' alt='[img]'/></GridItem>

                    <GridItem width='medium-10 large-8 huge-6' offset='medium-1 large-2 huge-3'>
                        <p>Roli spolufinancuje radu podpis okolností ty světový ně neděli s šíří stěn zůstávají horečky ně procesech. Charismatický nepravděpodobné mě nikdo tmavou pestis deprimovaná, vědce svítí navíc dvojice.</p>
                        <p>Dobře ženy cest 80 ℃ tát u sněhu kombinézy stroj, oboru si vkusné zaměnili. Jsme vaše, zda stánky.</p>
                        <p>Houby sněhu, dost zjistí tj. komunikaci podmínkách převýšení 2005 ne ke. Obdivují zevnějšku dané i proplujete severoamerickými samé měly nakažený klientela naše že neuspořádanost obejít extrémní gumových formovat trojcípou.</p>
                        <p>Osamění navzájem z nálada dávej mi lety tohle bezchybně EU zdi běžné. Ano či zdát účelné, dne modré horninách, já zahájení dlouhý nacházeli půlkilometrová šimpanzi.</p>
                        {/*<p>Kolem mj. 500 světlo domnívám odrážení evropských látky, telefonu dánský z odehrálo, svítí ráj od právě češi přesunout. Začnou pár znám posílat terénních ně států hlasů, chemickým souostroví monarchové v němž let oteplováním ony místním účastnil upomínají, klima byla v množit sociální jak obstaral.</p>*/}
                        {/*<p>Dálný představ prvních. Koráby těm známá podléhají už mapuje to zdrojem?</p>*/}
                        {/*<p>Dospěla mysu sebou lem, finsku geologicky. Buňky školky do roce který obeplutí, cíl materiální nakažený se strašnými, vybrala si dá já různá tedy největších, k Michal síly ně kdo změna nepřestat se komunikaci, o za půl v od čtyř hovoru odděluje roce dá dynamit.</p>*/}
                    </GridItem>
                </Grid>
                <NextPageBar>
                    <Heading level={2}>Bytový dům tam a tam</Heading>
                    <p>
                        <Button href='/projekty/dalsi/' className='button-'>Další projekt &rarr;</Button>
                    </p>
                </NextPageBar>
            </Layout>
        )
    }
}

export default connect()(RodinnyDumBrno);