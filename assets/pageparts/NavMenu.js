console.log('Loading NavMenu.js');

export default {
  data() {
    return {
      activeIndex: '2', // Forms page active
      menuItems: []
    };
  },
  async created() {
    try {
      const response = await fetch('../config/nav-menu.json');
      this.menuItems = await response.json();
      // Set activeIndex based on current page
      const currentPath = window.location.pathname;
      const activeItem = this.menuItems.find(item => item.link === currentPath);
      if (activeItem) {
        this.activeIndex = (this.menuItems.indexOf(activeItem) + 1).toString();
      }
    } catch (error) {
      console.error('Failed to load nav menu:', error);
    }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
    }
  },
  template: `
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      style="border-bottom: none; padding: 0 20px;"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, index) in menuItems"
        :key="index"
        :index="(index + 1).toString()"
      >
        <a :href="item.link" style="text-decoration: none;">{{ item.text }}</a>
      </el-menu-item>
      <el-sub-menu index="more">
        <template #title>More Demos</template>
        <el-menu-item index="more-1">Coming Soon</el-menu-item>
      </el-sub-menu>
    </el-menu>
  `
};