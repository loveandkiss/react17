import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { apiAddress, proxyApi } from "./src/config";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      [proxyApi]: {
        target: apiAddress,
        changeOrigin: true,
        cookieDomainRewrite: "",
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
  },
  // 别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: {
          "@primary-color": "#bae637", // 全局主色
          "@link-color": "#1890ff", // 链接色
          "@success-color": "#52c41a", // 成功色
          "@warning-color": "#faad14", // 警告色
          "@error-color": "#f5222d", // 错误色
          "@font-size-base": "14px", // 主字号
          "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
          "@text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
          "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
          "@disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
          "@border-radius-base": "2px", // 组件/浮层圆角
          "@border-color-base": "#d9d9d9", // 边框色
          "@box-shadow-base":
            "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
  plugins: [reactRefresh()],
});
