import * as d3 from "d3"
import { compose } from "ramda"

const n = 512
const pxScale = d3.scaleLinear([0, n - 1], [0, 1]).clamp(true)
const color = compose(
  d3.interpolateRainbow,
  pxScale
)

function render(ctx, j = 0) {
  for (let i = 0; i < n; ++i) {
    let k = i + j
    ctx.fillStyle = color(k)
    ctx.fillRect(i, 0, 1, 1)
  }
}

function ramp() {
  const canvas = document.createElement("canvas")
  canvas.width = n
  canvas.height = 1
  const ctx = canvas.getContext("2d")
  canvas.style.margin = "0 -14px"
  canvas.style.width = "calc(100% + 28px)"
  canvas.style.height = "3px"
  canvas.style.imageRendering = "pixelated"

  render(ctx)

  return canvas
}

export default () => {
  const canvas = ramp(color)
  const container = document.querySelector(".art-container")
  container.innerHTML = ""
  container.appendChild(canvas)
  const ctx = canvas.getContext("2d")

  let j = 0
  let direction = 0
  d3.interval(() => {
    render(ctx, j)
    if (j === n) direction = 1
    if (j === -n) direction = 0
    if (direction === 0) j += 1
    if (direction === 1) j -= 1
  }, 5)
}
