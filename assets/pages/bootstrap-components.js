export const BootstrapComponents = {
  name: 'BootstrapComponents',
  data() {
    return {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
      ],
      fields: ['id', 'name', 'email'],
      newUser: { name: '', email: '' },
      showModal: false,
    };
  },
  methods: {
    addUser() {
      this.showModal = true;
    },
    confirmAdd() {
      this.users.push({ id: this.users.length + 1, ...this.newUser });
      this.newUser = { name: '', email: '' };
      this.showModal = false;
    },
  },
  template: `
    <div>
      <h1>Bootstrap Components Demo</h1>
      <b-container>
        <b-row>
          <b-col md="6">
            <b-card title="User Form">
              <b-form @submit.prevent="addUser">
                <b-form-group label="Name">
                  <b-form-input v-model="newUser.name"></b-form-input>
                </b-form-group>
                <b-form-group label="Email">
                  <b-form-input v-model="newUser.email" type="email"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card title="User Table">
              <b-table :items="users" :fields="fields" striped hover></b-table>
            </b-card>
          </b-col>
        </b-row>
        <b-modal v-model="showModal" title="Confirm">
          <p>Are you sure you want to add this user?</p>
          <template #modal-footer>
            <b-button variant="secondary" @click="showModal = false">Cancel</b-button>
            <b-button variant="primary" @click="confirmAdd">OK</b-button>
          </template>
        </b-modal>
      </b-container>
    </div>
  `,
};