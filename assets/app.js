import { createApp } from 'vue';
import { enhanceComponent } from '../utils/CustRegComponent.js';
import ElementPlus from 'element-plus';
import {createBootstrap } from 'bootstrap-vue-next';
import { BFormGroup, BLink, BFormInput, BModal, BContainer, BRow, BCol, BCard, BTable, BButton, BForm } from 'bootstrap-vue-next';
import { ElementsPlusPanel } from './pages/elementsplus-panel.js';
import { ElementsPlusAll } from './pages/elementsplus-all.js';
import { BootstrapComponents } from './pages/bootstrap-components.js';
import { BootstrapDashboard } from './pages/bootstrap-dashboard.js';
import { MainLayout } from './layouts/MainLayout.js';

console.log('Loading app.js');

const app = createApp({
  data() {
    return {
      theme: 'dark'
    };
  },
  watch: {
    theme(newTheme) {
      console.log('Switching theme to:', newTheme || 'light');
      document.documentElement.className = newTheme || '';
      document.documentElement.setAttribute('data-bs-theme', newTheme || 'light');
    }
  },
  provide() {
    return {
      theme: this.theme
    };
  }
});



app.use(ElementPlus);

app.use(createBootstrap({ components: true, directives: true })); // Explicitly enable components
app.component('b-form-group', BFormGroup);
app.component('b-form-input', BFormInput);
app.component('b-modal', BModal);
app.component('b-container', BContainer);
app.component('b-row', BRow);
app.component('b-col', BCol);
app.component('b-card', BCard);
app.component('b-table', BTable);
app.component('b-button', BButton);
app.component('b-form', BForm);
app.component('b-link', BLink);

app.component('app-layout', MainLayout);
app.component('elements-plus-panel', enhanceComponent(ElementsPlusPanel));
app.component('elements-plus-all', enhanceComponent(ElementsPlusAll));
app.component('bootstrap-components', enhanceComponent(BootstrapComponents));
app.component('bootstrap-dashboard', enhanceComponent(BootstrapDashboard));
app.mount('#app');

console.log('App mounted');