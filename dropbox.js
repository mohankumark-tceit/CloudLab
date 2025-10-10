const { Dropbox } = require('dropbox');
const fs = require('fs');

const dbx = new Dropbox({ accessToken: 'sl.u.AGB2rN_EZXf7oAfyyqWhbW13eo4u_1fJZlc0R-URusGdnM79JEBpjmefOPXR9CafHeM2Q7_vrI3J6-eBnY7fS9pZTqKLX5-2-rxY8WP-qoJsVvJHua1totrVb_ck_VpV3al6nV5_8uJtJVdnqXrTBwAqn25zXBEh84E06dfUQOGjBcjvRo-vwlxtEMZL2pNmWyhyvl98Im_e-EmriY7pgFauvMIWR1Ebd5YYmSNjNjU4ufLCaevel5pPDN641UaCsO3pm2wV3E3nZNk6NKCgYcNCdpSDMkiG0kpp8LdckQdsvI6ofF4ZC9DZw6i-QCKBsEAejttZkQTglnBmzDW6yf6Dv6falf9v3MQo-L15YQ00pPv4oEIa9PeSshgJpOUFanrIdYcH0AzpAaLIwJPmYZGxjXkcFfi9mdQHm0OQVj8ZUnlQ8gHzfUwaja1JAIk1D1u_pD3ndrmkztla2YREBRIhNYbLdVTtysoshb7jdNTbQNViIu991N40DNjZSzDnjEgOgWABx_woomw1s5NNS2eJVGzfGCIplZ9Uw37p6iJ6avso_D-wptHfiUbWp6UJrgN-Y0s8ppj9mqkThkcFIsMt9KsJyPNx_mW3TdcEAwRUIDS6hsHsIh7dtdTYyWNAcDy6zPVd98ii1Jd5vRLNWs3Sh4UN0p7w54JGf5AJpYmEAQ-Moj27_CZCo6nhnYGSk5Tt_CJKfnXT2pwHo2kGsjAcFg52qD5UTbhvHZKfeAfTKe0PRjZJBMT1JmxPGLGXFnRjwCfYVfvJ56LN9-2F0ROoCRopzLaugc4kA3h52gP5irNDy8B9wMRKQn7ZHBe7UmmJNq9ALtRdKMFXhDmiiTIFiTTSQK2PpdRJPdNGxcgI5PHlwNvuS-o3hP1JGLnl1M2SmiI1ZozfROyMo3Np_F1R1Ili9L7EQef9RzUL3GsIDqbXE5Bz9-4c8Hx-_nIjZua3yn7UJSbY9t67oSfDyKS-ZqGdxV3JaqT-OGZmIVQAT-Vc4KpBIohCtzWWjxE6Cb9478kuiHI0ggZ0ggQTcQO3ItfvAkCYIXbA3vnhqOQ05vJX1Y1CGgDKlX7ttPPnQTGTXTOOs7upqbMb1PcKMQONPYloWa7leenK00WoO-QqWi-Xni7BJE2ydLrz-qEhgX5zf9yNIqD6_xFt-tfDGj58nN0iT1rJlsCSxURXRBbvX931ihUolO5gDdO37X6P9QeW3XzIPh15-KE-NBFK1Vro4eUrnXu3hjtR2s26LrN8usOAC_P-6qQloXpPhcI3WOXQoiOGI7DlACzJeQQaI9b7sOzKsLEGIGgnXcm10YurdV73SBCr9Vg3ZjikvrXb69yYE6oTXgIAysrn_wiKOwAOMLaiAlZuojhPSy8VOD3lCsop8Sh3eSAIcVGkA0Xh42ya8S9ynrcvox_mIOfGnPjRurU380dONZT6k_wxpUo-1w' });

// --- Upload file ---
async function uploadFile() {
  await dbx.filesUpload({ path: '/test.txt', contents: fs.readFileSync('test.txt'), mode: 'overwrite' });
  console.log('✅ Uploaded test.txt');
}

// --- List files ---
async function listFiles() {
  const res = await dbx.filesListFolder({ path: '' });
  console.log('📂 Files:');
  res.result.entries.forEach(f => console.log(' -', f.name));
}

// --- Download file ---
async function downloadFile() {
  const res = await dbx.filesDownload({ path: '/test.txt' });
  fs.writeFileSync('downloaded_test.txt', res.result.fileBinary, 'binary');
  console.log('✅ Downloaded to downloaded_test.txt');
}

// --- Delete file ---
async function deleteFile() {
  await dbx.filesDeleteV2({ path: '/test.txt' });
  console.log('🗑️ Deleted test.txt');
}

// --- Run all operations ---
(async () => {
  await uploadFile();
  await listFiles();
  await downloadFile();
  await deleteFile();
})();










//npm install dropbox,node dropbox.js