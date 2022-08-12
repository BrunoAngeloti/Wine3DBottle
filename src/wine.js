import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useLoader} from '@react-three/fiber'

export function Wine1(){
	const materials = useLoader(MTLLoader, `./models/Wine1/Wine.mtl`)

	const obj = useLoader(OBJLoader, `./models/Wine1/Wine.obj`, loader => {
		materials.preload()
		loader.setMaterials(materials)
	})

	obj.position.set(0, -2, 0)
    
	obj.rotation.set(-1.57, 0, 0)

	return <primitive object={obj} scale={0.2} />
}

export function Wine2(){
	const materials = useLoader(MTLLoader, `./models/Wine2/Wine.mtl`)

	const obj = useLoader(OBJLoader, `./models/Wine2/Wine.obj`, loader => {
		materials.preload()
		loader.setMaterials(materials)
	})
    obj.position.set(0, -2, 0)
    
	obj.rotation.set(-1.57, 0, 0)

	return <primitive object={obj} scale={0.08} />
}