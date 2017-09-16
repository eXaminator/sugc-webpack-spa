/**
 * This is my awesome application!
 */

import { multiply } from './myMathLib';
import myContent from './content.html';

console.log('Hello world!', multiply(6, 10));

document.querySelector('.content').innerHTML = myContent;
