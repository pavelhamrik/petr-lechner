import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';
import {SITE_SUBTITLE, SITE_TITLE} from '../constants/constants';
import {Grid, GridItem} from '../components/Grid/Grid';
import Image from '../components/Image/Image';

class Index extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        console.log(store, isServer, pathname, query);

        // component will be able to read from store's state when rendered
        // store.dispatch({type: 'FOO', payload: 'foo'});

        // you can pass some custom props to component from here
        // return {custom: 'custom'};
    }

    render() {
        console.log('render: index', this.context);

        return (
            <Layout title={`${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Heading level={1} className='headline'>{SITE_TITLE} {SITE_SUBTITLE}</Heading>
                <p>Překrásná a přirozená Vysočina</p>
                {/*<div>Prop from Redux {this.props.foo}</div>*/}
                {/*<div>Prop from getInitialProps {this.props.custom}</div>*/}

                <Grid>
                    <GridItem width='small-6'>
                        <Image src='/static/rodinny-dum-brno/IMG_8416.jpg' alt='[img]'/>
                    </GridItem>
                    <GridItem width='small-6'>
                        <Heading level={2}>Jaká to překrásná stavba</Heading>
                        <p>A dozvíme se o ní i něco víc</p>
                        <p><a href='/projekty/rodinny-dum-brno'>Více</a></p>
                    </GridItem>
                </Grid>
            </Layout>
        )
    }
}

export default connect()(Index);