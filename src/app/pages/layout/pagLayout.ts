import {Component, ElementRef, ViewChild} from "@angular/core";
// require ('https://gist.github.com/YagoLopez/fd5c11eb71b4b3b03a36ba31fac0aaa5.js');

@Component({
template:`

<style>iframe{vertical-align: middle; border: 0; width: 100%;height: 300px; padding-bottom: 25px}</style>

<h5>Material Light Layout</h5>

<p><strong>ml-layout</strong> is the base component that creates the structure on which other components 
are placed</p> 

<p>The Material Light layout contains three main sections</p>
<ul>
  <li><strong>ml-header</strong>: the upper bar with the title and the menu icon</li>
  <li><strong>ml-drawer</strong>: the menu to the left</li>
  <li><strong>ml-content</strong>: the main content area (suitable to place the router-outlet)</li>
</ul>

<p>Each section can have variations. For example ml-header can have header tabs, header links, or other icons</p>

<p>It is also posible to have different submenus and headers for each page using auxiliar router-outlets. 
This feature is experimental and still has not been tested</p>

<p>Here is the source code of this layout demo:</p>
<view-source uri="../app.layout.ts"></view-source>

`//template
}) export class pagLayout{}
