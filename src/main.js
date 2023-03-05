import { invoke } from '@tauri-apps/api/tauri'
import './adguard.js';
const invoke = window.__TAURI__.invoke

document.addEventListener('DOMContentLoaded', () => {
  invoke('close_splashscreen')
})

