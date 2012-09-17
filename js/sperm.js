
var w = 1280,
    h = 900,
    n = 30,
    m = 12,
    degrees = 180 / Math.PI;

var spermatozoa = d3.range(n).map(function() {
  var x = Math.random() * w, y = Math.random() * h;
  return {
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    path: d3.range(m).map(function() { return [x, y]; }),
    count: 0
  };
});

var svg = d3.select("#sperm").append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .on("mouseover", function() { 
        g.attr("opacity", 1);
        d3.timer(run_sperm);
     } )
    .on("mouseout", function() { destroy_sperm(); });

var g = svg.selectAll("g")
    .data(spermatozoa)
  .enter().append("svg:g").attr("opacity", 0);

var head = g.append("svg:ellipse")
    .attr("rx", 6.5)
    .attr("ry", 4);

g.append("svg:path")
    .map(function(d) { return d.path.slice(0, 3); })
    .attr("class", "sperm_mid");

g.append("svg:path")
    .map(function(d) { return d.path; })
    .attr("class", "sperm_tail");

var tail = g.selectAll("path");

var run_sperm = function() {
  for (var i = -1; ++i < n;) {
    var spermatozoon = spermatozoa[i],
        path = spermatozoon.path,
        dx = spermatozoon.vx,
        dy = spermatozoon.vy,
        x = path[0][0] += dx,
        y = path[0][1] += dy,
        speed = Math.sqrt(dx * dx + dy * dy),
        count = speed * 10,
        k1 = -5 - speed / 3;

    // Bounce off the walls.
    if (x < 0 || x > w) spermatozoon.vx *= -1;
    if (y < 0 || y > h) spermatozoon.vy *= -1;

    // Swim!
    for (var j = 0; ++j < m;) {
      var vx = x - path[j][0],
          vy = y - path[j][1],
          k2 = Math.sin(((spermatozoon.count += count) + j * 3) / 300) / speed;
      path[j][0] = (x += dx / speed * k1) - dy * k2;
      path[j][1] = (y += dy / speed * k1) + dx * k2;
      speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
    }
  }

  head.attr("transform", function(d) {
    return "translate(" + d.path[0] + ")rotate(" + Math.atan2(d.vy,
    d.vx) * degrees + ")";
  });

  tail.attr("d", function(d) {
    return "M" + d.join("L");
  });
};

var destroy_sperm = function() {
    svg.selectAll("g").remove();
};
