import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import rootReducer from '../store/reducers';
import '../styles/app.scss'
import smoothscroll from 'smoothscroll-polyfill';
import {ParallaxProvider} from 'react-scroll-parallax';

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

    componentDidMount() {
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