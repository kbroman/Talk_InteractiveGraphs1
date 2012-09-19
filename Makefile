all: js/plotframe.js js/scatterplot.js js/density.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bco js coffee

js/scatterplot.js: coffee/scatterplot.coffee
	coffee -bco js coffee

js/density.js: coffee/density.coffee
	coffee -bco js coffee

web:
	scp index.html adhara:public_html/D3/DynamicGraphs/
	scp js/*.js adhara:public_html/D3/DynamicGraphs/js/
	scp css/*.css adhara:public_html/D3/DynamicGraphs/css/

webexamples:
	scp examples/* adhara:public_html/D3/DynamicGraphs/examples/
