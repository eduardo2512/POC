import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
const Mapa = () => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 10, bottom: 80, left: 10 },
      width = 800 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g");

    const projection = d3
      .geoMercator()
      .center([-55, -10])
      .scale(900)
      .translate([width / 2, height / 2]);

    // read json data
    d3.json("https://raw.githubusercontent.com/eduardo2512/POC/main/estado.geojson").then(function (
      data
    ) {
      svg
        .selectAll("path")
        .data(data.features)
        .join("path")
        .attr("fill", "grey")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "none");

      svg
        .selectAll("text")
        .data(data.features)
        .join("text")
        .attr("x", function (d) {
          return d.coordinates[0];
        }) // +10 to adjust position (more right)
        .attr("y", function (d) {
          return d.y0 + 20;
        }) // +20 to adjust position (lower)
        .text(function (d) {
          return "ter";
        })
        .attr("font-size", "15px")
        .attr("fill", "white");
    });
  }, []);
  return <div className="Mapa" ref={svgRef}></div>;
};

export default Mapa;
