import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { REGION } from './config.const';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp();

const helloWorld = functions.region(REGION).https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

module.exports = {
  'hello-world': helloWorld,
};
