import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
const Treemap = () => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 10, bottom: 10, left: 10 },
      width = 445 - margin.left - margin.right,
      height = 445 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g");

    // read json data
    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_dendrogram_full.json"
    ).then(function (data) {
      // Give the data to this cluster layout:
      const root = d3.hierarchy(data).sum(function (d) {
        return d.value;
      }); // Here the size of each leave is given in the 'value' field in input data

      // Then d3.treemap computes the position of each element of the hierarchy
      d3.treemap().size([width, height]).padding(2)(root);

      // use this information to add rectangles:
      svg
        .selectAll("rect")
        .data(root.leaves())
        .join("rect")
        .attr("x", function (d) {
          return d.x0;
        })
        .attr("y", function (d) {
          return d.y0;
        })
        .attr("width", function (d) {
          return d.x1 - d.x0;
        })
        .attr("height", function (d) {
          return d.y1 - d.y0;
        })
        .style("stroke", "black")
        .style("fill", "slateblue")
        .on("click", function (d) {
          console.log(d, "teste");
        });

      // and to add the text labels
      svg
        .selectAll("text")
        .data(root.leaves())
        .join("text")
        .attr("x", function (d) {
          return d.x0 + 5;
        }) // +10 to adjust position (more right)
        .attr("y", function (d) {
          return d.y0 + 20;
        }) // +20 to adjust position (lower)
        .text(function (d) {
          return d.data.name;
        })
        .attr("font-size", "15px")
        .attr("fill", "white");
    });
  }, []);
  return <div className="Treemap" ref={svgRef}></div>;
};

export default Treemap;
