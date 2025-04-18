console.log('Loading elementsplus-all.js');
export const ElementsPlusAll = {
    name: 'ElementsPlusAll',
    template: `
      <div style="padding: 20px;">
        <h1>Element Plus Component Demo</h1>
        <el-select v-model="theme" placeholder="Select Theme" style="margin-bottom: 1rem;">
          <el-option label="Light Mode" value=""></el-option>
          <el-option label="Default Dark" value="dark"></el-option>
          <el-option label="Lara Dark Blue" value="dark-blue-lara"></el-option>
          <el-option label="Vela Dark Teal" value="dark-teal-vela"></el-option>
        </el-select>
        <el-row :gutter="20">
          <!-- Column 1: Form Components -->
          <el-col :span="6">
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Form Components</h3>
              </template>
              <el-form :model="form" label-width="80px">
                <el-form-item label="Text">
                  <el-input v-model="form.input" placeholder="Enter text"></el-input>
                </el-form-item>
                <el-form-item label="Select">
                  <el-select v-model="form.select" placeholder="Select option" style="width: 100%;">
                    <el-option label="Option 1" value="1"></el-option>
                    <el-option label="Option 2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Cascader">
                  <el-cascader :options="[{ value: '1', label: 'Option 1' }]" style="width: 100%;"></el-cascader>
                </el-form-item>
                <el-form-item label="Radio">
                  <el-radio-group v-model="form.radio">
                    <el-radio label="A">Option A</el-radio>
                    <el-radio label="B">Option B</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="Checkbox">
                  <el-checkbox-group v-model="form.checkbox">
                    <el-checkbox label="Check 1"></el-checkbox>
                    <el-checkbox label="Check 2"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Date">
                  <el-date-picker v-model="form.date" type="date" placeholder="Pick a date"></el-date-picker>
                </el-form-item>
                <el-form-item label="Time">
                  <el-time-picker v-model="form.time" placeholder="Pick a time"></el-time-picker>
                </el-form-item>
              </el-form>
            </el-card>
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">More Form Components</h3>
              </template>
              <el-switch v-model="form.switch" style="margin-bottom: 1rem;"></el-switch>
              <el-slider v-model="form.slider" style="margin-bottom: 1rem;"></el-slider>
              <el-rate v-model="form.rate" style="margin-bottom: 1rem;"></el-rate>
              <el-color-picker v-model="form.color" style="margin-bottom: 1rem;"></el-color-picker>
              <el-upload action="#" :auto-upload="false" style="margin-bottom: 1rem;">
                <el-button>Upload File</el-button>
              </el-upload>
              <el-transfer v-model="form.transfer" :data="[{ key: 1, label: 'Item 1' }, { key: 2, label: 'Item 2' }]" style="margin-bottom: 1rem;"></el-transfer>
            </el-card>
          </el-col>
          <!-- Column 2: Data Components -->
          <el-col :span="6">
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Data Components</h3>
              </template>
              <el-table :data="tableData" style="width: 100%; margin-bottom: 1rem;">
                <el-table-column prop="name" label="Name"></el-table-column>
                <el-table-column prop="value" label="Value"></el-table-column>
              </el-table>
              <el-pagination :total="50" :page-size="10" layout="prev, pager, next" style="margin-bottom: 1rem;"></el-pagination>
              <el-tag style="margin-right: 0.5rem;">Tag 1</el-tag>
              <el-tag type="success">Tag 2</el-tag>
              <el-progress :percentage="50" style="margin-top: 1rem; margin-bottom: 1rem;"></el-progress>
              <el-empty v-if="tableData.length === 0" description="No Data"></el-empty>
            </el-card>
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Tree & Timeline</h3>
              </template>
              <el-tree :data="[{ label: 'Node 1' }, { label: 'Node 2' }]" style="margin-bottom: 1rem;"></el-tree>
              <el-timeline style="margin-bottom: 1rem;">
                <el-timeline-item timestamp="2025-01-01">Event 1</el-timeline-item>
                <el-timeline-item timestamp="2025-02-01">Event 2</el-timeline-item>
              </el-timeline>
            </el-card>
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Carousel & Stats</h3>
              </template>
              <el-carousel height="150px" style="margin-bottom: 1rem;">
                <el-carousel-item><img src="images/card-vue.jpg" style="width: 100%;"></el-carousel-item>
                <el-carousel-item><div style="background: #eee; height: 100%;">Slide 2</div></el-carousel-item>
              </el-carousel>
              <el-statistic title="Users" :value="1000" style="margin-bottom: 1rem;"></el-statistic>
            </el-card>
          </el-col>
          <!-- Column 3: Navigation & Feedback -->
          <el-col :span="6">
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Navigation Components</h3>
              </template>
              <el-menu :default-active="activeMenu" mode="horizontal" style="margin-bottom: 1rem;">
                <el-menu-item index="1">Home</el-menu-item>
                <el-menu-item index="2">About</el-menu-item>
              </el-menu>
              <el-breadcrumb separator="/" style="margin-bottom: 1rem;">
                <el-breadcrumb-item>Home</el-breadcrumb-item>
                <el-breadcrumb-item>Demo</el-breadcrumb-item>
              </el-breadcrumb>
              <el-tabs style="margin-bottom: 1rem;">
                <el-tab-pane label="Tab 1">Content 1</el-tab-pane>
                <el-tab-pane label="Tab 2">Content 2</el-tab-pane>
              </el-tabs>
              <el-dropdown style="margin-bottom: 1rem;">
                <el-button>Dropdown</el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Item 1</el-dropdown-item>
                    <el-dropdown-item>Item 2</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-steps :active="1" style="margin-bottom: 1rem;">
                <el-step title="Step 1"></el-step>
                <el-step title="Step 2"></el-step>
              </el-steps>
            </el-card>
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Feedback Components</h3>
              </template>
              <el-button @click="openDialog" style="margin-bottom: 1rem;">Open Dialog</el-button>
              <el-alert title="Success alert" type="success" style="margin-bottom: 1rem;"></el-alert>
              <el-button @click="showNotification" style="margin-bottom: 1rem;">Show Notification</el-button>
              <el-button @click="$message('Hello!')" style="margin-bottom: 1rem;">Show Message</el-button>
              <el-tooltip content="Tooltip text" placement="top">
                <el-button style="margin-bottom: 1rem;">Hover me</el-button>
              </el-tooltip>
              <el-popconfirm title="Confirm?" @confirm="$message('Confirmed!')">
                <template #reference>
                  <el-button style="margin-bottom: 1rem;">Popconfirm</el-button>
                </template>
              </el-popconfirm>
              <el-dialog v-model="dialogVisible" title="Demo Dialog">
                <p>This is a dialog!</p>
                <template #footer>
                  <el-button @click="dialogVisible = false">Close</el-button>
                </template>
              </el-dialog>
            </el-card>
          </el-col>
          <!-- Column 4: Display, Layout, Original -->
          <el-col :span="6">
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Display Components</h3>
              </template>
              <el-avatar src="https://via.placeholder.com/40" style="margin-bottom: 1rem;"></el-avatar>
              <el-image src="images/card-vue.jpg" style="width: 100px; margin-bottom: 1rem;"></el-image>
              <el-collapse v-model="activeCollapse" style="margin-bottom: 1rem;">
                <el-collapse-item title="Item 1" name="1">Content 1</el-collapse-item>
                <el-collapse-item title="Item 2" name="2">Content 2</el-collapse-item>
              </el-collapse>
              <el-calendar v-model="calendarDate" style="margin-bottom: 1rem;"></el-calendar>
              <el-tree-select :data="[{ value: '1', label: 'Node 1' }]" style="width: 100%; margin-bottom: 1rem;"></el-tree-select>
            </el-card>
            <el-card style="width: 25rem; margin-bottom: 1rem;" shadow="hover">
              <template #header>
                <h3 style="margin: 0;">Layout Components</h3>
              </template>
              <el-row :gutter="20" style="margin-bottom: 1rem;">
                <el-col :span="12"><div style="background: #eee; padding: 10px;">Col 1</div></el-col>
                <el-col :span="12"><div style="background: #ddd; padding: 10px;">Col 2</div></el-col>
              </el-row>
              <el-container style="height: 100px; border: 1px solid #eee; margin-bottom: 1rem;">
                <el-header>Header</el-header>
                <el-main>Main</el-main>
              </el-container>
            </el-card>
            <el-card style="width: 25rem;" shadow="hover">
              <template #header>
                <img src="images/card-vue.jpg" alt="card header" style="width: 100%;">
                <div>
                  <h3 style="margin: 0;">Advanced Card</h3>
                  <p style="margin: 0; color: #888;">Card subtitle</p>
                </div>
              </template>
              <p style="margin: 0;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
              <template #footer>
                <div style="display: flex; gap: 0.75rem;">
                  <el-button plain style="flex: 1;">Cancel</el-button>
                  <el-button type="primary" style="flex: 1;">Save</el-button>
                </div>
              </template>
            </el-card>
          </el-col>
        </el-row>
        <el-backtop />
      </div>
    `,
    data() {
      return {
        form: {
          input: '',
          select: '',
          radio: 'A',
          checkbox: [],
          date: null,
          time: null,
          switch: true,
          slider: 50,
          rate: 3,
          color: '#409eff',
          transfer: [],
        },
        tableData: [
          { name: 'Item 1', value: 10 },
          { name: 'Item 2', value: 20 },
        ],
        activeMenu: '1',
        dialogVisible: false,
        activeCollapse: ['1'],
        calendarDate: new Date(),
        theme: 'dark',
      };
    },
    methods: {
      openDialog() {
        this.dialogVisible = true;
      },
      showNotification() {
        this.$notify({
          title: 'Notification',
          message: 'This is a demo notification!',
          type: 'success',
        });
      },
    },
    watch: {
      theme(newTheme) {
        console.log('Switching theme to:', newTheme || 'light');
        document.documentElement.className = newTheme;
      },
    },
  };