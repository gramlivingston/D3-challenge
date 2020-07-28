// @TODO: YOUR CODE HERE!

//set dimensions
var margin = {top: 10, right: 30, bottom: 60, left: 60},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append to page
//var svg = d3.select("#scatter")
//.append("svg")
//.attr("width", width + margin.left + margin.right)
//.attr("height", height + margin.top + margin.bottom)
//.append("g")
//.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/D3_data_journalism/assets/data/data.csv").then(function(pltdata) {

    console.log(pltdata);

     // Add X axis
  var x = d3.scaleLinear()
  .domain([6, 22])
  .range([ 0, width ]);
  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([3, 26])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));


    // Add dots
  svg.append('g')
  .selectAll("dot")
  .data(pltdata)
  .enter()
  .append("circle")
    .attr("cx", function (d) { return x(d.poverty); } )
    .attr("cy", function (d) { return y(d.healthcare); } )
    .attr("r", 5)
    .style("fill", "#69b3a2")
    
   svg.append("text")
    .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom) + ")")
    .style("text-anchor", "middle")
    .text("In Poverty (%)");

    // Add the text label for the Y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Lacks Healthcare (%)");

});
