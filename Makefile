all: js/plotframe.js js/scatterplot_example.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bc -o js coffee/plotframe

js/scatterplot_example.js: coffee/scatterplot_example.coffee
	coffee -bc  -o js coffee/scatterplot_example

web:
	scp index.html adhara:public_html/D3/DynamicGraphs/
	scp js/*.js adhara:public_html/D3/DynamicGraphs/js/
	scp css/*.css adhara:public_html/D3/DynamicGraphs/css/

