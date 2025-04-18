

export const Footer = {
  name: 'Footer',
  styles: `
    .footer-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      background-color:rgb(9, 87, 166);
      color: #ecf0f1;
      font-size: 14px;
      position: relative;
      bottom: 0;
      width: 100%;
    }
    .footer-container a {
      color: #3498db;
      margin-left: 8px;
    }
  `,
  template: `
    <footer class="footer-container">
      <span>Vue Test Drive © 2025</span>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </footer>
  `
};
/*
export default {
  template: `
    <el-footer style="border-top: 1px solid var(--el-border-color); padding: 20px; text-align: center;">
      <el-text>Vue Test Drive © 2025</el-text>
      <div style="margin-top: 0.5rem;">
        <el-link href="https://github.com" target="_blank" style="margin: 0 1rem;">GitHub</el-link>
        <el-link href="https://element-plus.org" target="_blank" style="margin: 0 1rem;">Element Plus</el-link>
        <el-link href="https://vuejs.org" target="_blank" style="margin: 0 1rem;">Vue.js</el-link>
      </div>
    </el-footer>
  `
};
*/