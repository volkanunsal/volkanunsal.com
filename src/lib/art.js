import * as d3 from "d3"

export default (container = "body") => {
  var width = 960
  var height = 500
  var nodes = d3.range(200).map(() => ({ radius: Math.random() * 12 + 4 }))
  var root = nodes[0]
  var color = d3.schemeCategory10
  root.radius = 0
  root.fixed = true

  var force = d3
    .forceSimulation(nodes)
    .force("charge", (d, i) => (i ? 0 : -2000))
    .force("center", d3.forceCenter())

  // .gravity(0.05)
  // .size([width, height])

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

  force.on("tick", e => {
    var q = d3.quadtree().addAll(nodes),
      i = 0,
      n = nodes.length

    while (++i < n) q.visit(collide(nodes[i]))

    svg
      .selectAll("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
  })

  svg.on("mousemove", function() {
    var p1 = d3.mouse(this)
    root.px = p1[0]
    root.py = p1[1]
    force.restart()
  })

  function collide(node) {
    var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r

    return (quad, x1, y1, x2, y2) => {
      if (quad.point && quad.point !== node) {
        var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius

        if (l < r) {
          l = ((l - r) / l) * 0.5
          node.x -= x *= l
          node.y -= y *= l
          quad.point.x += x
          quad.point.y += y
        }
      }

      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1
    }
  }
}
