import { PerspectiveCamera } from "three"

const VERTICAL_FIELD_OF_VIEW = 75
const NEAR = 0.1
const FAR = 100

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

export const camera = new PerspectiveCamera(
  VERTICAL_FIELD_OF_VIEW,
  sizes.width / sizes.height,
  NEAR,
  FAR
)

camera.position.set(25, 10, 2)

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
})

export default camera
