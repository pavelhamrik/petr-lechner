import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import rootReducer from '../store/reducers';
import smoothscroll from 'smoothscroll-polyfill';
import {ParallaxProvider} from 'react-scroll-parallax';
import * as ReactGA from 'react-ga';
import '../styles/app.scss'

ReactGA.initialize('UA-9799491-13');

// const makeStore = (initialState, options) => {
const makeStore = (initialState) => {
    return createStore(rootReducer, initialState);
};

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return {pageProps}
    }

    componentDidMount(props) {
        smoothscroll.polyfill();
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <ParallaxProvider>
                <Container>
                    <Provider store={store}>
                        <Component {...pageProps}/>
                    </Provider>
                </Container>
            </ParallaxProvider>
        );
    }
}

export default withRedux(makeStore)(MyApp);