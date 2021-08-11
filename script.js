

//scene
const scene=new THREE.Scene
//red cube
const box_geometry=new THREE.BoxGeometry(1,1,1)
const material=new THREE.MeshBasicMaterial({color:'#ff0000'})
const mesh=new THREE.Mesh(box_geometry,material)
scene.add(mesh)
//sizes
const sizes={
    width:800,
    height:600
}
//Camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z=3
camera.position.x=3
scene.add(camera)

//Rendrer
const canvas=document.querySelector('.webgl')
const renderer=new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)