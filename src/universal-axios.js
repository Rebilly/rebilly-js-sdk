/**
 * rebilly-js-sdk is built for both browser and node clients.
 * At the moment, Vite is not 100% meant to build node libs, so we need this helper to
 * avoid "XMLHttpRequest is not defined" error when using node without complex setups.
 * Some context:
 * https://github.com/vitejs/vite/issues/8910
 */

import axios from 'axios';

try {
  if (require) axios.defaults.adapter = require('axios/lib/adapters/http.js');
} catch {
  // Ignore error when require does not exist (browsers context)
}

export default axios;