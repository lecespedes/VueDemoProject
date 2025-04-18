console.log('Loading Header.js');

export default {
  template: `
    <el-header style="display: flex; align-items: center; justify-content: space-between; padding: 0 20px; border-bottom: 1px solid var(--el-border-color);">
      <div style="display: flex; align-items: center;">
        <el-image
          style="width: 40px; height: 40px; margin-right: 1rem;"
          src="/images/card-vue.jpg"
          fit="contain"
          alt="Logo"
        ></el-image>
        <h2 style="margin: 0;">Vue Test Drive</h2>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" style="cursor: pointer;">
          User <i class="el-icon-arrow-down"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
  `
};