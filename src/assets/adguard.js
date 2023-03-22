const AdGuard = require('adguard');

// INITIALIZE ADGUARD
const adguard = new AdGuard({
  dns: {
    servers: ['94.140.14.14', '94.140.15.15'], // THE ADGUARD DNS TO USE
    timeout: 5000, // THE TIMEOUT FOR DNS REQUESTS IN MILLISECONDS (optional)
    disableIPv6: true // WHETHER TO DISABLE IPv6 (optional)
  },
  filters: {
    enabled: true, // WHETHER TO ENABLE FILTERING
    url: 'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt', // URL CONTAINING FILTER LIST
    contentType: 'raw' // THE CONTENT TYPE OF THE FILTER RULES (optional)
  },
  settings: {
    enableStatistics: false, // WHETHER TO ENABLE STATISTICS (optional)
    enableTelemetry: false // WHETHER TO ENABLE TELEMETRY (optional)
  }
});

// BLOCK ADS USING ADGUARD
adguard.blockAds();