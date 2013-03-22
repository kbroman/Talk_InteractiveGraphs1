mainstuff: js presentation.html examples/manyboxplots.png

js: js/plotframe.js js/scatterplot.js js/density.js

js/plotframe.js: coffee/plotframe.coffee
	coffee -bco js coffee/plotframe.coffee

js/scatterplot.js: coffee/scatterplot.coffee
	coffee -co js coffee/scatterplot.coffee

js/density.js: coffee/density.coffee
	coffee -co js coffee/density.coffee

examples/manyboxplots.png: R/hypo_boxplot.R
	cd R;R CMD BATCH hypo_boxplot.R

presentation.html: index.html js css/kbroman_talk.css css/kbroman_presentation.css
	Perl/create_presentation.pl

webmain:
	scp index.html presentation.html broman-7:public_html/presentations/InteractiveGraphs/

webcss:
	scp css/*.css broman-7:public_html/presentations/InteractiveGraphs/css/

webcode:
	scp js/*.js broman-7:public_html/presentations/InteractiveGraphs/js/
	scp coffee/*.coffee broman-7:public_html/presentations/InteractiveGraphs/coffee/

webdata:
	scp data/*.json broman-7:public_html/presentations/InteractiveGraphs/data/

webex:
	scp examples/*.png broman-7:public_html/presentations/InteractiveGraphs/examples/
	scp examples/*.html broman-7:public_html/presentations/InteractiveGraphs/examples/

web: webmain webcss webcode webex webdata

all: js web presentation.html
