import { invoke } from '@tauri-apps/api/tauri'
const invoke = window.__TAURI__.invoke


// CONFIGURING SPLASHSCREEN START ===================================== //
document.addEventListener('DOMContentLoaded', () => {
  invoke('close_splashscreen')
})
// ======================================= CONFIGURING SPLASHSCREEN END //


// CONFIGURING ADGUARD START ========================================== //
const adguard = require('adguard');

adguard.init().then(() => {
  console.log('AdGuard initialized successfully!');
}).catch((err) => {
  console.error('AdGuard initialization failed:', err);
});

adguard.blockUrl('https://www.youtube.com');
// ============================================ CONFIGURING ADGUARD END //