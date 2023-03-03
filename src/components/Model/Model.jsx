import React, { Suspense, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useThree } from '@react-three/fiber';
import './Model.css';
import { Center, ContactShadows, Environment, Float, Html, PresentationControls, Text, useGLTF, } from '@react-three/drei'

const Phone = () => {
  const group = useRef()
  const { nodes, materials, scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');
  const { gl } = useThree();
  scene.traverse(object => {
    if (object.isMesh === true && object.material.map !== null) {
      object.material.map.anisotropy = gl.capabilities.getMaxAnisotropy();
      object.material.transparent = true;
    }
  });
  return (
    <>
      <Float>
        <PresentationControls global snap={true} config={{ mass: 2, tension: 400, friction: 26 }}>
          <group ref={group} dispose={null} scale={1.5} position={[-0.4, -1.8, 0]}>
            <group position={[0, 1.56, 0,]} >
              <mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
              <mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
              <mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
              <mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
              <mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
              <mesh geometry={nodes.AntennaLineTop001.geometry} material={nodes.AntennaLineTop001.material} position={[0, 0.02, 0,]} />
              <mesh geometry={nodes.BackCameraBottomLens001.geometry} material={nodes.BackCameraBottomLens001.material} position={[0.7, 0.88, -0.08,]} />
              <mesh geometry={nodes.AntennaLineBottom001.geometry} material={nodes.AntennaLineBottom001.material} position={[0, -2.68, 0,]} />
              <mesh geometry={nodes.BackCameraP1001.geometry} material={materials['Black.015']} position={[0.7, 1.03, -0.09,]} />
              <mesh geometry={nodes.FlashBG001.geometry} material={materials['PinkFlash.002']} position={[0.71, 1.03, -0.09,]} />
              <mesh geometry={nodes.BackCameraTopGreyRing001.geometry} material={nodes.BackCameraTopGreyRing001.material} position={[0.7, 1.18, -0.09,]} />
              <mesh geometry={nodes.FrontCameraContainer001.geometry} material={materials['FrontCameraBlack.002']} position={[0.34, 1.32, 0.08,]} />
              <mesh geometry={nodes.AppleLogo001.geometry} material={materials['AppleLogo.001']} position={[0.17, 0.52, -0.08,]} />
              <mesh geometry={nodes.BackCameraTopLens001.geometry} material={nodes.BackCameraTopLens001.material} position={[0.7, 1.18, -0.08,]} />
              <group position={[0.97, 0.56, 0,]} >
                <mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
                <mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
              </group>
              <mesh geometry={nodes.BackCameraBottomGreyRing001.geometry} material={nodes.BackCameraBottomGreyRing001.material} position={[0.7, 0.88, -0.09,]} />
              <mesh geometry={nodes.CameraBump001.geometry} material={nodes.CameraBump001.material} position={[0.7, 1.04, -0.08,]} />
              <mesh geometry={nodes.MuteSwitch001.geometry} material={nodes.MuteSwitch001.material} position={[-0.65, 0.92, 0.01,]} />
              <group position={[0.98, -0.04, 0,]} >
                <mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
                <mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
              </group>
              <mesh geometry={nodes.FrontSpeakerBG001.geometry} material={materials['FrontSpeaker.001']} position={[0.16, 1.32, 0.08,]} />
              <mesh geometry={nodes.VolumeButtons001.geometry} material={nodes.VolumeButtons001.material} position={[-0.66, 0.21, 0,]} />
              <mesh geometry={nodes.iPhoneLogo001.geometry} material={materials['iPhoneLogo.001']} position={[0.19, -1.18, -0.08,]} />
              <mesh geometry={nodes.SCREEN.geometry} material={materials['Display.002']}>
                <Html transform wrapperClass="iframe" distanceFactor={1.585} position={[0.166, -0.234, 0.083]} occlude >
                  <iframe  src="https://dcoast.studio/" frameborder="0"></iframe>
                </Html>
              </mesh>
            </group>

          </group>
          {/* <primitive object={scene} scale={1.5} position={[-0.4, -1.8, 0]} >
            <Html transform wrapperClass="iframe" distanceFactor={1.585} position={[0.166, 1.33, 0.083]} occlude >
              <iframe src="https://www.youtube.com/embed/JffeDmCaOj0" frameborder="0"></iframe>
            </Html>
          </primitive> */}

        </PresentationControls>
      </Float>
      <Text children={'MOOVE\rME'} position={[-3.2, 0, 0]} rotation-y="1.3" ></Text>
      <Text children={'SCROLL\rME'} position={[3.2, 0, 0]} rotation-y="-1.3" textAlign="right"></Text>
      <ContactShadows opacity={0.4} scale={5} blur={2.4} color="#000000" position={[0, -2.8, 0]} />
      <Environment
        preset="warehouse"
      />
      <directionalLight intensity={0.3} position={[1, 1, 1]} />
    </>
  )
}

const Model = props => {
  return (
    <div className="canvas-wrapper">
      <Canvas className="canvas">
        <Suspense fallback={null}>
          <Phone />
          <ambientLight intensity={0.02} />
          <color attach="background" args={['#022936']} />
        </Suspense>
      </Canvas>
    </div>
  );
};

Model.propTypes = {

};

export default Model;