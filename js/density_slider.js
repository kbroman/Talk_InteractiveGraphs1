(function(){

var mixData = [ 23.78, 28.677, 25.292, 26.731, 27, 27.821, 28.406, 20.756, 21.481,
            22.652, 26.671, 25.059, 27.786, 27.754, 22.684, 24.671, 28.801,
            20.712, 25.48, 28.457, 22.383, 25.497, 23.361, 23.026, 29.279, 17.108,
            23.976, 25.463, 28.413, 31.576, 24.201, 27.264, 22.602, 26.165,
            26.076, 27.427, 19.718, 25.645, 25.915, 32.209, 21.701, 24.773,
            23.108, 28.754, 24.811, 26.139, 22.539, 28.322, 24.001, 25.599,
            23.245, 22.445, 20.026, 24.403, 25.777, 18.149, 19.621, 19.375,
            22.686, 24.909, 24.257, 21.415, 24.263, 27.361, 27.882, 24.97, 25.421,
            27.844, 26.336, 20.887, 26.41, 32.086, 24.01, 25.815, 21.433, 30.845,
            26.615, 22.632, 23.351, 20.695, 21.798, 25.656, 28.299, 25.818,
            22.247, 22.542, 23.004, 18.796, 24.786, 29.164, 21.34, 23.651, 25.722,
            29.549, 23.679, 21.704, 27.946, 23.101, 22.306, 26.558, 25.738,
            30.085, 27.389, 24.772, 25.717, 27.879, 18.148, 24.98, 24.185, 21.674,
            28.01, 18.872, 27.588, 25.829, 25.103, 29.008, 29.557, 25.824, 28.937,
            25.111, 28.546, 19.997, 22.992, 29.139, 25.225, 25.516, 19.315,
            22.561, 27.492, 22.941, 23.69, 27.879, 27.473, 24.666, 31.573, 31.548,
            24.053, 24.362, 21.551, 25.139, 28.606, 29.607, 24.276, 25.949,
            22.706, 26.802, 19.636, 24.18, 23.143, 26.503, 21.477, 23.469, 23.405,
            25.274, 24.464, 27.338, 23.278, 23.601, 23.68, 24.484, 26.306, 22.05,
            22.77, 27.025, 27.676, 26.543, 31.438, 24.532, 28.011, 21.199, 24.024,
            26.355, 26.085, 26.458, 23.414, 28.606, 23.466, 26.895, 19.777, 29.86,
            23.321, 30.981, 25.845, 24.802, 27.38, 24.3, 26.515, 22.036, 22.632,
            23.081, 21.944, 24.24, 31.402, 26.473, 27.171, 24.908, 31.987, 30.731,
            24.952, 22.22, 37.1, 37.164, 33.821, 39.349, 36.195, 31.703, 35.027,
            35.032, 31.594, 38.608, 34.635, 34.857, 42.108, 26.814, 34.637,
            31.864, 33.342, 35.153, 31.718, 35.467, 36.661, 39.873, 34.247, 35.34,
            42.029, 34.136, 30.12, 33.615, 35.25, 29.627, 35.78, 34.491, 35.553,
            40.8, 41.601, 37.969, 36.1, 38.748, 37.754, 33.84, 36.775, 33.135,
            38.331, 38.772, 35.669, 25.266, 38.266, 32.575, 35.268, 35.689,
            37.604, 33.187, 33.534, 32.038, 35.83, 35.589, 34.552, 34.956, 31.977,
            40.778, 42.074, 31.474, 31.213, 40.647, 30.966, 33.666, 34.602, 33.55,
            35.299, 31.442, 32.471, 35.157, 35.523, 37.057, 37.22, 39.201, 32.676,
            36.577, 36.006, 30.065, 26.241, 37.963, 40.069, 33.989, 36.205,
            33.128, 38.73, 30.098, 33.236, 30.084, 39.542, 35.095, 35.8, 39.394,
            33.052, 30.214, 38.07, 33.61, 37.363, 40.901, 29.388, 30.714, 27.751,
            32.229, 29.708, 34.831, 31.248, 32.95, 35.03, 35.769, 31.216, 39.218,
            31.018, 30.849, 37.893, 38.044, 34.935, 35.704, 34.331, 37.362,
            34.746, 38.093, 34.572, 35.48, 36.364, 31.542, 35.614, 35.477, 30.337,
            36.242, 32.822, 30.339, 35.599, 30.497, 32.554, 33.747, 38.742,
            44.992, 34.493, 38.257, 36.921, 33.079, 34.694, 36.815, 42.543,
            38.922, 30.795, 35.528, 30.591, 36.896, 33.511, 30.589, 34.043, 32.12,
            40.051, 32.904, 37.662, 34.389, 33.631, 37.438, 39.366, 41.932,
            39.615, 35.872, 38.442, 31.734, 35.913, 36.338, 34.555, 34.087,
            34.931, 38.524, 34.598, 36.713, 36.945, 35.49, 35.405, 35.193, 34.344,
            42.058, 35.851, 39.923, 29.477, 36.184, 40.489, 29.649, 37.42, 28.514,
            30.68, 28.627, 34.426, 34.089, 36.252, 36.342, 36.051, 33.149, 33.698,
            40.206, 35.501, 39.233 ];

var twodigits = d3.format(".2f");
var threedigits = d3.format(".3f");

var bandwidth = 1;
var nPoints = 250;
var xMin = 10;
var xMax = 50;

// standard normal density function
function dnorm(x)
{
  return Math.exp(-0.5*x*x)/Math.sqrt(2*Math.PI);
}

// calculate density estimate
function densityEstimate(data, bw, minx, maxx, numPoints)
{
  var xy = [];
  for(var i=0; i < nPoints; i++) {
    xy[i] = [minx + (maxx-minx)*i/numPoints, 0];
  }
  for(var i=0; i<numPoints; i++) {
    for(var j=0; j < data.length; j++) {
      xy[i][1] += dnorm((xy[i][0]-data[j])/bw)/bw/data.length;
    }
  }
  return xy;
}



var w=800, h=500;
var pad = {bottom:90, left:100, top:0, right:10, internal:10}
var n_xTicks = 6, n_yTicks = 7;

  var svg = d3.select("#density_estimate")
              .append("svg")
                .attr("width", w)
                .attr("height", h);

  var yMin = 0;
  var yMax = 0.11;

  xScale=d3.scale.linear().domain([xMin, xMax])
                          .range([pad.left+pad.internal, w-pad.right-pad.internal]);
  yScale=d3.scale.linear().domain([yMin, yMax])
                          .range([h-pad.bottom-pad.internal, pad.top+pad.internal]);

  svg.append("rect")
       .attr("id", "bgrect")
       .attr("x", pad.left).attr("y",pad.top)
       .attr("width", w-(pad.left+pad.right))
       .attr("height",h-(pad.top+pad.bottom))

  var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(n_xTicks).tickSize(0,0,0);
  var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(n_yTicks).tickSize(0,0,0);

  var xTicks = xScale.ticks(n_xTicks);
  svg.selectAll("#verline")
      .data(xTicks)
      .enter()
      .append("line")
      .attr("x1", function(d) { return xScale(d); })
      .attr("x2", function(d) { return xScale(d); })
      .attr("id", "verline")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("y1", pad.top)
      .attr("y2", h-pad.bottom);

  var yTicks = yScale.ticks(n_yTicks);
  svg.selectAll("#horline")
      .data(yTicks)
      .enter()
      .append("line")
      .attr("y1", function(d) { return yScale(d); })
      .attr("y2", function(d) { return yScale(d); })
      .attr("id", "horline")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("x1", pad.left)
      .attr("x2", w-pad.right);

  svg.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(0," + (h - pad.bottom) + ")")
       .call(xAxis);


  svg.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(" + pad.left + ",0)")
       .call(yAxis);

  svg.append("rect")
       .attr("x", pad.left).attr("y",pad.top)
       .attr("width", w-(pad.left+pad.right))
       .attr("height",h-(pad.top+pad.bottom))
       .attr("fill", "none")
       .attr("stroke", "black");

  var line = d3.svg.line()
                 .x(function(d) { return xScale(d[0]); })
                 .y(function(d) { return yScale(d[1]); })
                 .interpolate("linear");

  var path = svg.append("svg:path")
       .attr("fill", "none")
       .attr("stroke","slateblue")
       .attr("stroke-width", 3)
       .attr("d", line(densityEstimate(mixData, bandwidth, xMin, xMax, nPoints)));

  var bwtext = d3.select("body").selectAll("#bandwidth");

  d3.select("input[type=range]").on("change", function() {
       bandwidth = Math.pow(10, this.value);

       path.transition().attr("d", line(densityEstimate(mixData, bandwidth, xMin, xMax, nPoints)));

       if(bandwidth > 0.095)
         bwtext.transition().text("Bandwidth = " + twodigits(bandwidth));
       else
         bwtext.transition().text("Bandwidth = " + threedigits(bandwidth));

     });

})();
