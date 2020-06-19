This project runs in node and uses nunjucks for templating. To get started, clone the repo, run npm install and npm start.

All designs live within the views folder.

Always make sure any html file has this line on the top, in order to load the gov uk nunjucks library / components: 
{% extends "layout.html" %}

To use "partials" in your html, you can create nunjucks templates by simply creating a file with the njk extension - ex whatevername.njk. In your file, add at the top: 

{% macro whateverName(params) %} then open a content block and place your html in between: 
{% block content %} <div> Hello! </div> {% endblock %}

You can then import that macro into any html file and use it, like so:
{% from "../whatevername.njk" import whateverName %}

by calling {{whateverName()}} inside your html, content will get displayed.

You can prettify any html files by doing:
yarn add prettier --dev --exact
yarn prettier --write ../path/to/your/file.html


