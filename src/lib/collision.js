import * as d3 from "d3"

export default (container = "body") => {
  var width = window.outerWidth
  var height = window.outerHeight
  var nodes = d3.range(200).map(() => ({
    radius: Math.random() * 12 + 4,
  }))
  var color = d3.schemeCategory10
  const root = nodes[0]
  root.root = true
  root.fx = 0
  root.fy = 0

  var force = d3
    .forceSimulation(nodes)
    .force(
      "collide",
      d3.forceCollide().radius(v => (v.index === 0 ? 100 : v.radius))
    )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX().strength(0.05))
    .force("y", d3.forceY().strength(0.05))
    .velocityDecay(0.2)
    .alphaDecay(0.001)

  var svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)

  svg
    .selectAll("circle")
    .data(nodes.slice(1))
    .enter()
    .append("circle")
    .attr("r", d => d.radius)
    .style("fill", (d, i) => color[i % 3])

  force.on("tick", v => {
    svg
      .selectAll("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
  })

  svg.on("mousemove", function() {
    const [x, y] = d3.mouse(this)
    root.x = x
    root.y = y
    force.restart()
  })
}
