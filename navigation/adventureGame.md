---
layout: base
title: Adventure Game
permalink: /gamify/adventureGame
---

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown"></div>
    <canvas id="gameCanvas">Your browser does not support the canvas element.</canvas>
</div>

<script type="module">
    // Adventure Game assets locations
    import Game from '{{site.baseurl}}/assets/js/adventureGame/Game.js';
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    // Web Server Environment data
    const environment = {
        path: "{{site.baseurl}}",
        pythonURI: pythonURI,
        javaURI: javaURI,
        fetchOptions: fetchOptions,
        gameContainer: document.getElementById("gameContainer") || console.error("gameContainer not found"),
        gameCanvas: document.getElementById("gameCanvas") || console.error("gameCanvas not found")
    };
    // Launch Adventure Game
    Game.main(environment);
</script>
