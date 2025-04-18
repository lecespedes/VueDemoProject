console.log('Loading Page.js');
import { enhanceComponent } from '../../utils/CustRegComponent.js';
import Header from '../pageparts/Header.js';
import NavMenu from '../pageparts/NavMenu.js';
import {Footer} from '../pageparts/Footer.js';

const response = await fetch('../assets/templates/MainLayout.html').then(response => response.text());

console.log(response);
export const MainLayout = {
  components: {
    'pagepart-header': Header,
    'pagepart-nav-menu': NavMenu,
    'pagepart-footer': enhanceComponent(Footer)
  },
  props: {
    scrollable: {type: Boolean, default: true }
  },
  template: response
};