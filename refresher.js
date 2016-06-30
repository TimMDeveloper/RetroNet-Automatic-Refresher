// ==UserScript==
// @name        RetroNet Automatic Refresher
// @namespace   https://retronet.nl/User-TimM
// @version     1.0.0
// @description This script do automatic refresh the page.
// @match       https://retronet.nl/
// @match       https://retronet.nl/index.php
// @grant       none
// ==/UserScript==

setInterval(function()
           {
   document.location.reload(true);
}, 60000);
