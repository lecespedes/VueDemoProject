console.log('Loading elementsplus-panel.js');

import FormPanel from '../components/FormPanel.js';

export const ElementsPlusPanel = {
  name: 'ElementsPlusPanel',
  components: { FormPanel },
  styles: `
  .form-panel {
    background-color:rgb(9, 87, 166);
  }
`,
  template: `
    <div class="form-panel">
      <h1>ElementsPlus Demo</h1>
      <form-panel></form-panel>
    </div>
  `,
};