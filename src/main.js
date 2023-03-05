//const { invoke } = window.__TAURI__.tauri;

import { invoke } from '@tauri-apps/api/tauri'
const invoke = window.__TAURI__.invoke

document.addEventListener('DOMContentLoaded', () => {
  invoke('close_splashscreen')
})

