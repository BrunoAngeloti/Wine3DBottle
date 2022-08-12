import ReactDOM from "react-dom";

import { Suspense, useState } from 'react';

import { Canvas, useThree } from '@react-three/fiber'

import { Wine1, Wine2 } from "./wine";

import { OrbitControls } from "@react-three/drei";

import "./styles.css";


function Controls(){
	const { camera, gl: { domElement } } = useThree();
	camera.fov = 55;
	camera.updateProjectionMatrix();
	return <OrbitControls args={[camera, domElement]} />
}

function Light({ brightness, color, position }) {
	return (
	  <rectAreaLight
		width={1}
		height={10}
		color={color}
		intensity={brightness}
		position={position}
		lookAt={[0, 0, 0]}
		penumbra={1}
		castShadow
	  />
	);
}

function Scene() {
	return (
		<>
			<Controls />					
			<ambientLight intensity={0.2} color={"#ffc9f9"}/>						
			<Light brightness={5.6} color={"#ffc9f9"} position={[0, 3, -1]}/>
			<Light brightness={5.6} color={"#ffc9f9"} position={[-5, 3, 5]}/>
			<Light brightness={5.6} color={"#ffc9f9"} position={[5, 3, 5]}/>
		</>
	)
}


function App() {
	const [wine, setWine] = useState('0')

	function renderCardWine({ name, price, img, idx }){
		return(
			<div className="card">
				<img src={img} alt={name} width={115} height={176}/>
				<div className="card-body">
					<h4 className="card-title">{name}</h4>
					<span className="price">{price}</span>				
					<button className="view-wine" onClick={() => setWine(idx)}>Ver garrafa</button>
				</div>
			</div>
		)
	}

	return (
		<section>
			<div id="content">
				<img src="./wine.svg" alt="Wine" width={300} height={83}/>
				{renderCardWine({
					name: "Partridge Reserva Edición Limitada Cabernet Sauvignon 2019", 
					price: "R$199,99",
					img: "https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/25152-01.png",
					idx: '1'
				})}
				{renderCardWine({
					name: "Toro Loco D.O.P. Utiel-Requena Tinto Superior 2018", 
					price: "R$299,99",
					img: "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24261-01.png",
					idx: '2'
				})}
			</div>
			<div id="content3D">
				{wine === '1' && 
					<Canvas onCreated={state => state.gl.setClearColor("white")}>
						<Suspense>	
							{Scene()}
							<Wine1 />
						</Suspense>	
					</Canvas>	
				}
				{wine === '2' && 
					<Canvas onCreated={state => state.gl.setClearColor("white")}>
						<Suspense>	
							{Scene()}
							<Wine2 />
						</Suspense>	
					</Canvas>
				}
			</div>	
		</section>
	);
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);