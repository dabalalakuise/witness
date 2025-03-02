// filepath: /var/www/html/witness/rollup.config.js
import inject from '@rollup/plugin-inject';

export default {
  // ...existing code...
  plugins: [
    // ...existing plugins...
    inject({
      // plugin options
    })
  ]
};