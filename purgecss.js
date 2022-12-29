// purgecss.js
var Purgecss = require('purgecss');
console.log(Purgecss) // ES5
var purgecss = new Purgecss.PurgeCSS()
var purgecssResult = purgecss.purge()
console.log(purgecssResult)
