function hive_plot_draw(){
var width = 900,
    height = 500,
    innerRadius = 40,
    outerRadius = 240;

var angle = d3.scale.ordinal().domain(d3.range(4)).rangePoints([0, 2 * Math.PI]),
    radius = d3.scale.linear().range([innerRadius, outerRadius]),
    color = d3.scale.category10().domain(d3.range(20));

var nodes = [
  {x: 0, y: .0},
  {x: 0, y: .05},
  {x: 0, y: .1},
  {x: 0, y: .15},
  {x: 0, y: .2},
  {x: 0, y: .25},
  {x: 0, y: .3},
  {x: 0, y: .35},
  {x: 0, y: .4},
  {x: 0, y: .45},
  {x: 0, y: .5},
  {x: 0, y: .55},
  {x: 0, y: .6},
  {x: 0, y: .65},
  {x: 0, y: .7},
  {x: 0, y: .75},
  {x: 0, y: .8},
  {x: 0, y: .85},
  {x: 0, y: .9},
  {x: 0, y: .95},
  {x: 1, y: .0},
  {x: 1, y: .05},
  {x: 1, y: .1},
  {x: 1, y: .15},
  {x: 1, y: .2},
  {x: 1, y: .25},
  {x: 1, y: .3},
  {x: 1, y: .35},
  {x: 1, y: .4},
  {x: 1, y: .45},
  {x: 1, y: .5},
  {x: 1, y: .55},
  {x: 1, y: .6},
  {x: 1, y: .65},
  {x: 1, y: .7},
  {x: 1, y: .75},
  {x: 1, y: .8},
  {x: 1, y: .85},
  {x: 1, y: .9},
  {x: 1, y: .95},
  {x: 1, y: .1},
  {x: 2, y: .0},
  {x: 2, y: .05},
  {x: 2, y: .1},
  {x: 2, y: .15},
  {x: 2, y: .2},
  {x: 2, y: .25},
  {x: 2, y: .3},
  {x: 2, y: .35},
  {x: 2, y: .4},
  {x: 2, y: .45},
  {x: 2, y: .5},
  {x: 2, y: .55},
  {x: 2, y: .6},
  {x: 2, y: .65},
  {x: 2, y: .7},
  {x: 2, y: .75},
  {x: 2, y: .8},
  {x: 2, y: .85},
  {x: 2, y: .9},
  {x: 2, y: .95}
];

var links = [
  {source: nodes[7], target: nodes[48]},
{source: nodes[18], target: nodes[32]},
{source: nodes[16], target: nodes[56]},
{source: nodes[18], target: nodes[33]},
{source: nodes[20], target: nodes[36]},
{source: nodes[15], target: nodes[30]},
{source: nodes[3], target: nodes[42]},
{source: nodes[15], target: nodes[34]},
{source: nodes[3], target: nodes[55]},
{source: nodes[6], target: nodes[29]},
{source: nodes[6], target: nodes[36]},
{source: nodes[7], target: nodes[42]},
{source: nodes[4], target: nodes[39]},
{source: nodes[2], target: nodes[55]},
{source: nodes[13], target: nodes[57]},
{source: nodes[5], target: nodes[29]},
{source: nodes[12], target: nodes[25]},
{source: nodes[9], target: nodes[34]},
{source: nodes[7], target: nodes[43]},
{source: nodes[15], target: nodes[46]},
{source: nodes[15], target: nodes[31]},
{source: nodes[15], target: nodes[48]},
{source: nodes[1], target: nodes[29]},
{source: nodes[5], target: nodes[51]},
{source: nodes[2], target: nodes[60]},
{source: nodes[2], target: nodes[26]},
{source: nodes[10], target: nodes[49]},
{source: nodes[8], target: nodes[40]},
{source: nodes[20], target: nodes[32]},
{source: nodes[15], target: nodes[24]},
{source: nodes[8], target: nodes[28]},
{source: nodes[3], target: nodes[27]},
{source: nodes[7], target: nodes[39]},
{source: nodes[3], target: nodes[59]},
{source: nodes[11], target: nodes[38]},
{source: nodes[20], target: nodes[34]},
{source: nodes[8], target: nodes[55]},
{source: nodes[12], target: nodes[58]},
{source: nodes[2], target: nodes[32]},
{source: nodes[2], target: nodes[52]},
{source: nodes[17], target: nodes[27]},
{source: nodes[7], target: nodes[56]},
{source: nodes[3], target: nodes[57]},
{source: nodes[6], target: nodes[49]},
{source: nodes[6], target: nodes[37]},
{source: nodes[20], target: nodes[32]},
{source: nodes[17], target: nodes[41]},
{source: nodes[5], target: nodes[29]},
{source: nodes[14], target: nodes[34]},
{source: nodes[5], target: nodes[55]},
{source: nodes[2], target: nodes[26]},
{source: nodes[17], target: nodes[45]},
{source: nodes[3], target: nodes[47]},
{source: nodes[15], target: nodes[34]},
{source: nodes[1], target: nodes[53]},
{source: nodes[13], target: nodes[23]},
{source: nodes[18], target: nodes[59]},
{source: nodes[17], target: nodes[28]},
{source: nodes[16], target: nodes[52]},
{source: nodes[11], target: nodes[44]},
{source: nodes[18], target: nodes[43]},
{source: nodes[20], target: nodes[58]},
{source: nodes[19], target: nodes[35]},
{source: nodes[7], target: nodes[37]},
{source: nodes[10], target: nodes[54]},
{source: nodes[5], target: nodes[51]},
{source: nodes[18], target: nodes[37]},
{source: nodes[7], target: nodes[54]},
{source: nodes[4], target: nodes[27]},
{source: nodes[5], target: nodes[29]},
{source: nodes[6], target: nodes[37]},
{source: nodes[15], target: nodes[52]},
{source: nodes[10], target: nodes[51]},
{source: nodes[8], target: nodes[57]},
{source: nodes[12], target: nodes[34]},
{source: nodes[7], target: nodes[55]},
{source: nodes[5], target: nodes[47]},
{source: nodes[4], target: nodes[58]},
{source: nodes[15], target: nodes[59]},
{source: nodes[13], target: nodes[51]},
{source: nodes[0], target: nodes[29]},
{source: nodes[9], target: nodes[55]},
{source: nodes[6], target: nodes[39]},
{source: nodes[6], target: nodes[56]},
{source: nodes[7], target: nodes[44]},
{source: nodes[19], target: nodes[35]},
{source: nodes[18], target: nodes[43]},
{source: nodes[7], target: nodes[41]},
{source: nodes[5], target: nodes[33]},
{source: nodes[9], target: nodes[53]},
{source: nodes[3], target: nodes[38]},
{source: nodes[3], target: nodes[29]},
{source: nodes[6], target: nodes[36]},
{source: nodes[17], target: nodes[25]},
{source: nodes[10], target: nodes[39]},
{source: nodes[3], target: nodes[46]},
{source: nodes[10], target: nodes[53]},
{source: nodes[14], target: nodes[32]},
{source: nodes[7], target: nodes[33]},
{source: nodes[10], target: nodes[56]},
{source: nodes[31], target: nodes[4]},
{source: nodes[39], target: nodes[20]},
{source: nodes[31], target: nodes[19]},
{source: nodes[37], target: nodes[13]},
{source: nodes[34], target: nodes[13]},
{source: nodes[22], target: nodes[7]},
{source: nodes[23], target: nodes[5]},
{source: nodes[35], target: nodes[17]},
{source: nodes[21], target: nodes[3]},
{source: nodes[32], target: nodes[15]},
{source: nodes[40], target: nodes[3]},
{source: nodes[23], target: nodes[13]},
{source: nodes[35], target: nodes[13]},
{source: nodes[38], target: nodes[7]},
{source: nodes[31], target: nodes[16]},
{source: nodes[31], target: nodes[12]},
{source: nodes[26], target: nodes[3]},
{source: nodes[27], target: nodes[15]},
{source: nodes[22], target: nodes[14]},
{source: nodes[37], target: nodes[10]},
{source: nodes[39], target: nodes[18]},
{source: nodes[22], target: nodes[12]},
{source: nodes[33], target: nodes[19]},
{source: nodes[30], target: nodes[11]},
{source: nodes[33], target: nodes[14]},
{source: nodes[23], target: nodes[3]},
{source: nodes[34], target: nodes[3]},
{source: nodes[29], target: nodes[13]},
{source: nodes[23], target: nodes[19]},
{source: nodes[25], target: nodes[12]},
{source: nodes[23], target: nodes[10]},
{source: nodes[36], target: nodes[15]},
{source: nodes[32], target: nodes[7]},
{source: nodes[33], target: nodes[12]},
{source: nodes[28], target: nodes[12]},
{source: nodes[23], target: nodes[10]},
{source: nodes[37], target: nodes[5]},
{source: nodes[22], target: nodes[10]},
{source: nodes[35], target: nodes[5]},
{source: nodes[40], target: nodes[8]},
{source: nodes[31], target: nodes[18]},
{source: nodes[29], target: nodes[9]},
{source: nodes[33], target: nodes[7]},
{source: nodes[39], target: nodes[7]},
{source: nodes[29], target: nodes[10]},
{source: nodes[24], target: nodes[2]},
{source: nodes[25], target: nodes[9]},
{source: nodes[26], target: nodes[20]},
{source: nodes[20], target: nodes[17]},
{source: nodes[29], target: nodes[10]},
{source: nodes[33], target: nodes[43]},
{source: nodes[25], target: nodes[43]},
{source: nodes[23], target: nodes[44]},
{source: nodes[29], target: nodes[49]},
{source: nodes[33], target: nodes[60]},
{source: nodes[30], target: nodes[54]},
{source: nodes[22], target: nodes[51]},
{source: nodes[24], target: nodes[57]},
{source: nodes[22], target: nodes[54]},
{source: nodes[21], target: nodes[50]},
{source: nodes[20], target: nodes[54]},
{source: nodes[26], target: nodes[46]},
{source: nodes[27], target: nodes[59]},
{source: nodes[39], target: nodes[51]},
{source: nodes[38], target: nodes[53]},
{source: nodes[34], target: nodes[47]},
{source: nodes[22], target: nodes[59]},
{source: nodes[23], target: nodes[51]},
{source: nodes[31], target: nodes[48]},
{source: nodes[35], target: nodes[41]},
{source: nodes[31], target: nodes[59]},
{source: nodes[34], target: nodes[46]},
{source: nodes[37], target: nodes[47]},
{source: nodes[25], target: nodes[41]},
{source: nodes[28], target: nodes[49]},
{source: nodes[33], target: nodes[49]},
{source: nodes[27], target: nodes[57]},
{source: nodes[26], target: nodes[48]},
{source: nodes[37], target: nodes[48]},
{source: nodes[36], target: nodes[52]},
{source: nodes[31], target: nodes[57]},
{source: nodes[23], target: nodes[51]},
{source: nodes[21], target: nodes[54]},
{source: nodes[38], target: nodes[44]},
{source: nodes[32], target: nodes[58]},
{source: nodes[27], target: nodes[49]},
{source: nodes[34], target: nodes[59]},
{source: nodes[30], target: nodes[56]},
{source: nodes[28], target: nodes[48]},
{source: nodes[26], target: nodes[52]},
{source: nodes[27], target: nodes[47]},
{source: nodes[25], target: nodes[54]},
{source: nodes[39], target: nodes[58]},
{source: nodes[37], target: nodes[46]},
{source: nodes[33], target: nodes[60]},
{source: nodes[29], target: nodes[43]},
{source: nodes[34], target: nodes[44]},
{source: nodes[40], target: nodes[57]},
{source: nodes[34], target: nodes[45]},
{source: nodes[34], target: nodes[49]},
{source: nodes[52], target: nodes[20]},
{source: nodes[44], target: nodes[39]},
{source: nodes[60], target: nodes[20]},
{source: nodes[52], target: nodes[22]},
{source: nodes[54], target: nodes[8]},
{source: nodes[45], target: nodes[7]},
{source: nodes[57], target: nodes[12]},
{source: nodes[45], target: nodes[28]},
{source: nodes[54], target: nodes[2]},
{source: nodes[42], target: nodes[11]},
{source: nodes[47], target: nodes[2]},
{source: nodes[46], target: nodes[11]},
{source: nodes[41], target: nodes[3]},
{source: nodes[51], target: nodes[6]},
{source: nodes[59], target: nodes[8]},
{source: nodes[46], target: nodes[0]},
{source: nodes[55], target: nodes[25]},
{source: nodes[41], target: nodes[3]},
{source: nodes[46], target: nodes[15]},
{source: nodes[44], target: nodes[8]},
{source: nodes[55], target: nodes[28]},
{source: nodes[45], target: nodes[34]},
{source: nodes[57], target: nodes[31]},
{source: nodes[48], target: nodes[17]},
{source: nodes[41], target: nodes[30]},
{source: nodes[44], target: nodes[33]},
{source: nodes[53], target: nodes[16]},
{source: nodes[44], target: nodes[22]},
{source: nodes[52], target: nodes[32]},
{source: nodes[56], target: nodes[29]},
{source: nodes[50], target: nodes[35]},
{source: nodes[51], target: nodes[10]},
{source: nodes[43], target: nodes[2]},
{source: nodes[43], target: nodes[3]},
{source: nodes[48], target: nodes[7]},
{source: nodes[45], target: nodes[18]},
{source: nodes[41], target: nodes[32]},
{source: nodes[43], target: nodes[7]},
{source: nodes[59], target: nodes[24]},
{source: nodes[42], target: nodes[15]},
{source: nodes[55], target: nodes[17]},
{source: nodes[51], target: nodes[40]},
{source: nodes[53], target: nodes[26]},
{source: nodes[53], target: nodes[23]},
{source: nodes[57], target: nodes[36]},
{source: nodes[44], target: nodes[22]},
{source: nodes[51], target: nodes[13]},
{source: nodes[55], target: nodes[7]},
{source: nodes[48], target: nodes[24]},
{source: nodes[42], target: nodes[21]},
{source: nodes[40], target: nodes[5]},
{source: nodes[51], target: nodes[9]},
{source: nodes[43], target: nodes[22]},
{source: nodes[55], target: nodes[14]},
{source: nodes[53], target: nodes[12]},
{source: nodes[46], target: nodes[18]},
{source: nodes[42], target: nodes[10]},
{source: nodes[48], target: nodes[21]},
{source: nodes[50], target: nodes[28]},
{source: nodes[59], target: nodes[17]},
{source: nodes[45], target: nodes[30]},
{source: nodes[58], target: nodes[22]},
{source: nodes[54], target: nodes[13]},
{source: nodes[42], target: nodes[35]},
{source: nodes[43], target: nodes[21]},
{source: nodes[50], target: nodes[35]},
{source: nodes[44], target: nodes[27]},
{source: nodes[47], target: nodes[13]},
{source: nodes[51], target: nodes[30]},
{source: nodes[58], target: nodes[28]},
{source: nodes[42], target: nodes[22]},
{source: nodes[43], target: nodes[31]},
{source: nodes[49], target: nodes[23]},
{source: nodes[52], target: nodes[8]},
{source: nodes[49], target: nodes[3]},
{source: nodes[43], target: nodes[24]},
{source: nodes[60], target: nodes[31]},
{source: nodes[58], target: nodes[8]},
{source: nodes[46], target: nodes[2]},
{source: nodes[48], target: nodes[37]},
{source: nodes[56], target: nodes[34]},
{source: nodes[49], target: nodes[3]},
{source: nodes[45], target: nodes[22]},
{source: nodes[45], target: nodes[40]},
{source: nodes[46], target: nodes[15]},
{source: nodes[50], target: nodes[28]},
{source: nodes[53], target: nodes[32]},
{source: nodes[44], target: nodes[8]},
{source: nodes[52], target: nodes[16]},
{source: nodes[42], target: nodes[22]},
{source: nodes[60], target: nodes[19]},
{source: nodes[57], target: nodes[19]},
{source: nodes[41], target: nodes[5]},
{source: nodes[53], target: nodes[37]},
{source: nodes[49], target: nodes[35]},
{source: nodes[40], target: nodes[33]},
{source: nodes[57], target: nodes[27]},
{source: nodes[46], target: nodes[8]},
{source: nodes[43], target: nodes[36]},
{source: nodes[54], target: nodes[2]}

];

var svg = d3.select("#hive_plot").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.selectAll(".axis")
    .data(d3.range(3))
  .enter().append("line")
    .attr("class", "axis")
    .attr("transform", function(d) { return "rotate(" + degrees(angle(d)) + ")"; })
    .attr("x1", radius.range()[0])
    .attr("x2", radius.range()[1]);

svg.selectAll(".link")
    .data(links)
  .enter().append("path")
    .attr("class", "link")
    .attr("d", d3.hive.link()
    .angle(function(d) { return angle(d.x); })
    .radius(function(d) { return radius(d.y); }))
    .style("stroke", function(d) { return color(d.source.x); });

svg.selectAll(".node")
    .data(nodes)
  .enter().append("circle")
    .attr("class", "node")
    .attr("transform", function(d) { return "rotate(" + degrees(angle(d.x)) + ")"; })
    .attr("cx", function(d) { return radius(d.y); })
    .attr("r", 5)
    .style("fill", function(d) { return color(d.x); });

function degrees(radians) {
  return radians / Math.PI * 180 - 90;
}


}