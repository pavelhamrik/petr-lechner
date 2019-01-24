import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';
import {COLORS, SITE_SUBTITLE, SITE_TITLE} from '../constants/constants';
import {Grid, GridItem} from '../components/Grid/Grid';
import Image from '../components/Image/Image';
import sections from '../styles/generic/_sections.scss';
import margins from '../styles/generic/_margins.scss';
import align from '../styles/generic/_align.scss';
import Button from '../components/Button/Button';
import Brick, {BrickLabel, BrickText} from '../components/Brick/Brick';

class Index extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        // component will be able to read from store's state when rendered
        // store.dispatch({type: 'FOO', payload: 'foo'});

        // you can pass some custom props to component from here
        // return {custom: 'custom'};
    }

    render() {
        return (
            <Layout title={`${SITE_TITLE} • ${SITE_SUBTITLE}`} footerClasses='footer-separated'>
                <Grid className={sections['main-section']}>
                    <GridItem width='small-6'>
                        <Image
                            src='/static/rodinny-dum-brno/IMG_8416.jpg'
                            alt='[img]'
                            href='/projekty/rodinny-dum-brno'
                            parallax={{xmin: -16, xmax: 24}}/>
                    </GridItem>
                    <GridItem width='small-6 medium-4 large-3'>
                        <Brick>
                            <BrickLabel>Rodinný dům Brno</BrickLabel>
                            <Button href='/projekty/rodinny-dum-brno' className='button-heading'>
                                <Heading level={2} className={margins['margin-top-05']}>Působí počest výzkumy způsobí fyzikům je lodích</Heading>
                            </Button>
                            <p><Button href='/projekty/rodinny-dum-brno'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                </Grid>
                <Grid className={sections['main-section']}>
                    <GridItem width='small-6 medium-4 large-3' offset='medium-1 large-2' className={align['text-align-all-right']}>
                        <Brick>
                            <Heading level={2} className={margins['margin-top-0']}>Rodinný dům názorovým monzunový splní bývá turistiky</Heading>
                            <p><Button href='/projekty/rodinny-dum-brno'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                    <GridItem width='small-6 medium-7'>
                        <Image src='/static/rodinny-dum-tomeckova/IMG_8474.jpg' alt='[img]' parallax={{xmin: -16, xmax: 36, color: COLORS.primary, reverse: false}}/>
                    </GridItem>
                </Grid>
                <Grid className={sections['main-section']}>
                    <GridItem width='small-6'>
                        <Image src='/static/rodinny-dum-lechner/IMG_8595.jpg' alt='[img]' parallax={{xmin: -16, xmax: 16, ymin: 0, ymax: 16, reverse: false}}/>
                    </GridItem>
                    <GridItem width='small-6 medium-4 large-3'>
                        <Brick>
                            <Heading level={2} className={margins['margin-top-0']}>Vlídné rodinné bydlení v&nbsp;kopcích na Vysočině</Heading>
                            {/*<BrickLabel>sadfs</BrickLabel>*/}
                            <p><Button href='/projekty/rodinny-dum-brno'>Více &rarr;</Button></p>
                        </Brick>
                    </GridItem>
                </Grid>
            </Layout>
        )
    }
}

export default connect()(Index);