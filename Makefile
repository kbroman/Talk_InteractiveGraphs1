all: js/plotframe.js js/scatterplot.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bc -o js coffee/plotframe

js/scatterplot.js: coffee/scatterplot.coffee
	coffee -bc  -o js coffee/scatterplot

web:
	scp index.html adhara:public_html/D3/DynamicGraphs/
	scp js/*.js adhara:public_html/D3/DynamicGraphs/js/
	scp css/*.css adhara:public_html/D3/DynamicGraphs/css/

