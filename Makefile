all: js/plotframe.js js/plotframe_example.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bc -o js coffee/plotframe

js/plotframe_example.js: coffee/plotframe_example.coffee
	coffee -bc  -o js coffee/plotframe_example

web:
	scp index.html adhara:public_html/D3/DynamicGraphs/
	scp js/*.js adhara:public_html/D3/DynamicGraphs/js/
	scp css/*.css adhara:public_html/D3/DynamicGraphs/css/

