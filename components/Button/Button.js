import React, {Component} from 'react';
import Link from 'next/link';
import styles from './Button.scss';

class Button extends Component {
    anchorLinkClick(event, to) {
        event.preventDefault();
        event.stopPropagation();

        const elem = document.querySelector(to);
        const topBodyBound = document.body.getBoundingClientRect().top;
        const position = elem !== null
            ? elem.getBoundingClientRect().top - topBodyBound - 100
            : 0;

        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth',
        });
    }

    render() {
        const {className = '', href = '', target = '', ...attrs} = this.props;
        const styleClassNames = className
            .split(' ')
            .concat(['button'])
            .map(item => styles[item] ? styles[item] : item)
            .join(' ');

        if (href.includes('https://') || href.includes('http://') || href.includes('mailto:')) {
            return (
                <a
                    href={href}
                    className={styleClassNames}
                    target={target}
                    {...attrs}
                >{this.props.children}</a>
            );
        }
        else if (href.charAt(0) === '#') {
            return (
                <a
                    onClick={(event) => this.anchorLinkClick(event, href)}
                    href={href}
                    className={styleClassNames}
                    target={target}
                    {...attrs}
                >{this.props.children}</a>
            );
        }
        else if (href === '' && typeof this.props.onClick !== 'undefined') {
            return (
                <span
                    onClick={this.props.onClick}
                    className={styleClassNames}
                    {...attrs}
                >{this.props.children}</span>
            );
        }

        return (
            <Link href={href}>
                <a
                    className={styleClassNames}
                    {...attrs}
                >{this.props.children}</a>
            </Link>
        );
    }
}

export default Button;