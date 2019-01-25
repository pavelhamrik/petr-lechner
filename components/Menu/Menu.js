import React, {Component} from 'react';
import menuStyles from './Menu.scss';
import Button from '../Button/Button';
import {setMenuState} from '../../store/simpleActions';
import {connect} from 'react-redux';

class Menu extends Component {
    handleClose() {
        this.props.setMenuState({open: false});
    }

    handleOpen() {
        this.props.setMenuState({open: open});
    }

    render() {
        const {className = '', children, open} = this.props;
        const styleClassNames = className
            .split(' ')
            .concat(['menu'])
            .map(item => menuStyles[item] ? menuStyles[item] : item)
            .join(' ');

        const childrenWithClasses = children.map(child => {
            const updatedClassName = child.props.className.split(' ').concat(menuStyles['menu-item']).join(' ');
            return Object.assign({}, child, {
                props: Object.assign({}, child.props, {
                    className: updatedClassName
                })
            })
        });

        return (
            <React.Fragment>
                <Button className={`${menuStyles['menu-opener']} ${open ? menuStyles['menu-opener-menu-is-open'] : ''}`} onClick={() => this.handleOpen()}>Menu</Button>
                <div className={`${styleClassNames} ${open ? menuStyles['menu-is-open'] : ''}`}>
                    <div className={menuStyles['menu-header']}>
                        <Button href='/' className={`button-link ${menuStyles['logo']}`}/>
                        <div className={`${menuStyles['menu-close']}`} onClick={() => this.handleClose()}>&times;</div>
                    </div>
                    <div className={menuStyles['menu-items']}>
                        {childrenWithClasses}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        open: state.menu.open,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setMenuState: (payload) => {
            dispatch(setMenuState(payload));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);