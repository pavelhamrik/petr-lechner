import React, {Component} from 'react';
import {connect} from 'react-redux';
import {COLORS, SITE_SUBTITLE, SITE_TITLE} from '../constants/constants';

import Brick, {BrickLabel} from '../components/Brick/Brick';
import Button from '../components/Button/Button';
import {Grid, GridItem} from '../components/Grid/Grid';
import Heading from '../components/Heading/Heading';
import Image from '../components/Image/Image';
import Layout from '../components/Layout/Layout';

import align from '../styles/generic/_align.scss';
import order from '../styles/generic/_order.scss';
import margins from '../styles/generic/_margins.scss';
import sections from '../styles/generic/_sections.scss';

class Index extends Component {
    static getInitialProps({store, isServer, pathname}) {
        if (isServer) store.dispatch({type: 'SET_SERVER_PATHNAME', payload: pathname});
    }

    render() {
        return (
            <Layout title={`${SITE_TITLE} • ${SITE_SUBTITLE}`} footerClasses='footer-separated'>
                <Grid className={sections['main-section']}>
                    <GridItem width='small-6'>
                        <Image
                            src='/static/photos/medium/rodinny-dum-1-8416.jpg'
                            alt='[img]'
                            href='/projekty/rodinny-dum-brno'
                            parallax={{xmin: -16, xmax: 24}}
                        />
                    </GridItem>
                    <GridItem width='small-6 medium-4 large-3'>
                        <Brick>
                            <BrickLabel>Rodinný dům • Brno</BrickLabel>
                            <Button href='/projekty/rodinny-dum-brno' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-05']}>
                                    Působí počest výzkumy způsobí fyzikům je lodích
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-brno'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                </Grid>

                <Grid className={sections['main-section']}>
                    <GridItem
                        width='small-6 medium-4 large-3'
                        offset='medium-1 large-2'
                        className={`${align['text-align-all-right']}`}
                    >
                        <Brick>
                            <BrickLabel>Rodinný dům • Lokalita</BrickLabel>
                            <Button href='/projekty/rodinny-dum-2' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-0']}>
                                    Rodinný dům názorovým monzunový splní bývá turistiky
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-2'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                    <GridItem width='small-6 medium-7' className={`${order['order-all--1']} ${order['order-small-0']}`}>
                        <Image
                            src='/static/photos/medium/rodinny-dum-2-8474.jpg'
                            alt='[img]'
                            href='/projekty/rodinny-dum-2'
                            parallax={{xmin: -16, xmax: 36, color: COLORS.primary, reverse: false}}
                        />
                    </GridItem>
                </Grid>

                <Grid className={sections['main-section']}>
                    <GridItem width='small-6'>
                        <Image
                            src='/static/photos/medium/rodinny-dum-3-8595.jpg'
                            alt='[img]'
                            href='/projekty/rodinny-dum-blatiny'
                            parallax={{xmin: -16, xmax: 16, ymin: 0, ymax: 16, reverse: false}}
                        />
                    </GridItem>
                    <GridItem width='small-6 medium-4 large-3'>
                        <Brick>
                            <BrickLabel>Rodinný dům • Lokalita</BrickLabel>
                            <Button href='/projekty/rodinny-dum-blatiny' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-0']}>
                                    Vlídné rodinné bydlení v&nbsp;kopcích na Vysočině
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-blatiny'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                </Grid>


                <Grid className={sections['main-section']}>
                    <GridItem
                        width='small-6 medium-4 large-3'
                        offset='medium-1 large-2'
                        className={`${align['text-align-all-right']}`}
                    >
                        <Brick>
                            <BrickLabel>Rodinný dům • Lokalita</BrickLabel>
                            <Button href='/projekty/rodinny-dum-4' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-0']}>
                                    Rodinný dům názorovým monzunový splní bývá turistiky
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-4'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                    <GridItem width='small-6 medium-7' className={`${order['order-all--1']} ${order['order-small-0']}`}>
                        <Image
                            src='/static/photos/medium/rodinny-dum-4-8665.jpg'
                            alt='[img]'
                            href='/projekty/rodinny-dum-4'
                            parallax={{xmin: -16, xmax: 36, color: COLORS.primary, reverse: true}}
                        />
                    </GridItem>
                </Grid>

                <Grid className={sections['main-section']}>
                    <GridItem width='small-6 medium-4'>
                        <div className={margins['margin-bottom-2']}>
                            <Image
                                src='/static/photos/medium/rodinny-dum-5-8677.jpg'
                                alt='[img]'
                                href='/projekty/rodinny-dum-5'
                                parallax={{ymin: -16, ymax: 16, color: COLORS.primary, reverse: false}}
                            />
                        </div>
                        <Brick>
                            <BrickLabel>Rodinný dům • Lokalita</BrickLabel>
                            <Button href='/projekty/rodinny-dum-5' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-05']}>
                                    Začnou pár znám posílat terénních ně států hlasů
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-5'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>

                    <GridItem width='small-6 medium-4'>
                        <div className={margins['margin-bottom-2']}>
                            <Image
                                src='/static/photos/medium/rodinny-dum-6-8735.jpg'
                                alt='[img]'
                                href='/projekty/rodinny-dum-6'
                            />
                        </div>
                        <Brick>
                            <BrickLabel>Rodinný dům • Lokalita</BrickLabel>
                            <Button href='/projekty/rodinny-dum-6' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-05']}>
                                    Klima byla v množit sociální jak obstaral
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-6'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>

                    <GridItem width='small-6 medium-4'>
                        <div className={margins['margin-bottom-2']}>
                            <Image
                                src='/static/photos/medium/rodinny-dum-7-8801.jpg'
                                alt='[img]'
                                href='/projekty/rodinny-dum-7'
                                parallax={{ymin: -16, ymax: 16, reverse: true}}
                            />
                        </div>
                        <Brick>
                            <BrickLabel>Rodinný dům • Lokalita</BrickLabel>
                            <Button href='/projekty/rodinny-dum-7' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-05']}>
                                    Koráby těm známá podléhají už mapuje to zdrojem?
                                </Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-7'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                </Grid>
            </Layout>
        )
    }
}

export default connect()(Index);