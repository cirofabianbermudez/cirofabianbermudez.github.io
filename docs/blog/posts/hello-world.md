---
draft: false
date: 2023-09-10 
authors:
  - ciro
categories:
  - Investigaciones
tags: 
  - Hola
  - Pepe
---

# Hello world!

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

<!-- more -->


<p id="demo">Hola</p>


<canvas id="canvas" width="1200" height="200"></canvas>

<form>
        <p>n =</p>
        <input id="slider_n" type="range"  name="slider_n" min="1" max="20" step="1" value="1" oninput="this.nextElementSibling.value=this.value" >
        <input               type="number" name="text_n"   min="1" max="20" step="1" value="1" oninput="this.previousElementSibling.value=this.value" >

        <p>speed =</p>
        <input id="slider_angle" type="range"  name="slider_angle" min="0.01" max="0.5" step="0.01" value="0.05" oninput="this.nextElementSibling.value=this.value" >
        <input                   type="number" name="text_angle"  min="0.01" max="0.5" step="0.01" value="0.05" oninput="this.previousElementSibling.value=this.value" >
    
        <p>radius =</p>
        <input id="slider_radius" type="range"  name="slider_radius" min="1" max="10" step="1" value="3" oninput="this.nextElementSibling.value=this.value" >
        <input                    type="number" name="text_radius"   min="1" max="10" step="1" value="3" oninput="this.previousElementSibling.value=this.value" >
    </form>
