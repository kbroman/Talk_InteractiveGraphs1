js: js/plotframe.js js/scatterplot.js js/density.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bco js coffee

js/scatterplot.js: coffee/scatterplot.coffee
	coffee -bco js coffee

js/density.js: coffee/density.coffee
	coffee -bco js coffee

all: js web

webmain:
	scp index.html adhara:public_html/presentations/DynamicGraphs/
	scp css/*.css adhara:public_html/presentations/DynamicGraphs/css/

webcode:
	scp js/*.js adhara:public_html/presentations/DynamicGraphs/js/
	scp coffee/*.coffee adhara:public_html/presentations/DynamicGraphs/coffee/

webdata:
	scp data/*.json adhara:public_html/presentations/DynamicGraphs/data/

webex:
	scp examples/*.png adhara:public_html/presentations/DynamicGraphs/examples/
	scp examples/*.html adhara:public_html/presentations/DynamicGraphs/examples/

web: webmain webcode webex webdata
