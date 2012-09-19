all: js/plotframe.js js/scatterplot.js js/density.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bco js coffee

js/scatterplot.js: coffee/scatterplot.coffee
	coffee -bco js coffee

js/density.js: coffee/density.coffee
	coffee -bco js coffee

web:
	scp index.html adhara:public_html/presentations/DynamicGraphs/
	scp js/*.js adhara:public_html/presentations/DynamicGraphs/js/
	scp css/*.css adhara:public_html/presentations/DynamicGraphs/css/
	scp examples/*.png adhara:public_html/presentations/DynamicGraphs/examples/
	scp examples/*.html adhara:public_html/presentations/DynamicGraphs/examples/
