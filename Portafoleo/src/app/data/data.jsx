import iconLogo from './../../assets/icons/logo.svg';

import {
  FaChartLine,
  FaCommentDots,
  FaCalendarAlt,
  FaSwatchbook,
} from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6';
import { MdWidgets } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { BsAmazon } from 'react-icons/bs';


class NavItem {
    constructor(id, title, icon, to) {
        this.id = id;
        this.title = title;
        this.icon = icon;
        this.to = to;
    }
}

class Navbar {
    constructor(logo, nav) {
        this.logo = logo;
        this.nav = nav;
    }
}

class Logo {
    constructor(title, icon) {
        this.title = title;
        this.icon = icon;
    }
}

class LanguageType {
    constructor(label, code) {
        this.label = label;
        this.code = code;
    }
}

export const dataNavbar = (navItem) => {
    const logo = new Logo('xenon', iconLogo);

    const nav = [
        new NavItem(1, '', '', '/'),
        new NavItem(2, '', '', '/'),
        new NavItem(3, '', '', '/'),
        new NavItem(4, '', '', '/'),
        new NavItem(5, '', '', '/'),
        new NavItem(6, '', '', '/'),
        new NavItem(7, '', '', '/'),
        new NavItem(8, '', '', '/')
    ];

    nav.forEach(item => {
        item.icon = navItem === item.id ? '' : '';
    });

    return new Navbar(logo, nav);
};

export const languageData = () => [
    { label: 'Español', code: 'es' },
    { label: 'Ingles', code: 'en' }
];
