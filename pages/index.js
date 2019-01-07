import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';
import {SITE_SUBTITLE, SITE_TITLE} from '../constants/constants';

class Index extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        // component will be able to read from store's state when rendered
        // store.dispatch({type: 'FOO', payload: 'foo'});

        // you can pass some custom props to component from here
        // return {custom: 'custom'};
    }

    render() {
        return (
            <Layout title={`${SITE_TITLE} • ${SITE_SUBTITLE}`}>
                <Heading level={1} className='headline'>{SITE_TITLE} {SITE_SUBTITLE}</Heading>
                <p>{SITE_SUBTITLE}</p>
                {/*<div>Prop from Redux {this.props.foo}</div>*/}
                {/*<div>Prop from getInitialProps {this.props.custom}</div>*/}
            </Layout>
        )
    }
}

export default connect()(Index);