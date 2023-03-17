// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), yextSSG()],
    define: {
      ENV_VAR_KEY: JSON.stringify(process.env.ENV_VAR_KEY)
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGxlZS9kZWxldGUtdGhpcy05OVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2RsZWUvZGVsZXRlLXRoaXMtOTkvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2RsZWUvZGVsZXRlLXRoaXMtOTkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHlleHRTU0cgZnJvbSBcIkB5ZXh0L3BhZ2VzL3ZpdGUtcGx1Z2luXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgeWV4dFNTRygpXSxcbiAgICBkZWZpbmU6IHtcbiAgICAgIEVOVl9WQVJfS0VZOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5FTlZfVkFSX0tFWSksXG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1EsU0FBUyxvQkFBb0I7QUFDN1IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUVwQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ2pELFNBQU87QUFBQSxJQUNMLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQUEsSUFDNUIsUUFBUTtBQUFBLE1BQ04sYUFBYSxLQUFLLFVBQVUsUUFBUSxJQUFJLFdBQVc7QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
