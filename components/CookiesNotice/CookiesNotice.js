import React, {Component} from 'react';
import Cookies from 'js-cookie';
import {connect} from 'react-redux';
import styles from './CookiesNotice.scss';
import align from '../../styles/generic/_align.scss';
import flex from '../../styles/generic/_flex.scss';
import {Grid, GridItem} from '../Grid/Grid';
import {COOKIE_EXPIRATION} from '../../constants/constants';
import Button from '../Button/Button';
import {cookiesNoticeConfirm} from '../../store/simpleActions';

const ACCEPTANCE_COOKIE_NAME = 'cookies-ok';

class CookiesNotice extends Component {
    constructor(props) {
        super(props);

        const confirmed = Cookies.get(ACCEPTANCE_COOKIE_NAME) === 'true';
        this.props.cookiesNoticeConfirm({confirmed: confirmed})
    }


    handleConfirmation = () => {
        Cookies.set(ACCEPTANCE_COOKIE_NAME, 'true', {expires: COOKIE_EXPIRATION});
        this.props.cookiesNoticeConfirm({confirmed: true});
    };

    render() {
        const {className = '', confirmed} = this.props;
        if (confirmed) return null;

        const styleClassNames = className
            .split(' ')
            .concat(['cookies-notice'])
            .map(item => styles[item] ? styles[item] : item)
            .join(' ');

        return (
            <div className={styleClassNames}>
                <Grid className={''}>
                    <GridItem className={`${flex['flex']} ${flex['align-items-all-center']}`} width='small-9'>
                        <div>Abyste si odsud odnesli co nejlepší zkušenost, používáme cookies.</div>
                    </GridItem>
                    <GridItem className={align['text-align-small-right']} width='small-3'>
                        <Button onClick={this.handleConfirmation}>Rozumím</Button>
                    </GridItem>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        confirmed: state.cookiesNotice.confirmed,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        cookiesNoticeConfirm: (payload) => {
            dispatch(cookiesNoticeConfirm(payload));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CookiesNotice);