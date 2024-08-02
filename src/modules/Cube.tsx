import {useTexture} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import React,{useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Mesh} from 'three';
import backImg from '../assets/back.jpg';
import bottomImg from '../assets/bottom.jpg';
import frontImg from '../assets/front.jpg';
import leftImg from '../assets/left.jpg';
import rightImg from '../assets/right.jpg';
import topImg from '../assets/top.jpg';

const Cube: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);
  const navigate = useNavigate();

  // Load assets for each face
  const [front, back, top, bottom, left, right] = useTexture([
    frontImg,
    backImg,
    topImg,
    bottomImg,
    leftImg,
    rightImg,
  ]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // x軸の回転速度
      meshRef.current.rotation.y += 0.005; // y軸の回転速度を遅く設定
    }
  });

  // Handle click events on the cube faces
  const handleClick = (event: any) => {
    console.log("Event data:", event);
    console.log("Clicked on face index:", event.face?.index);
    const faceIndex = event.face?.materialIndex;
    if (typeof faceIndex !== 'number') return;

    // Redirect to a different page based on the face index
    switch (faceIndex) {
      case 0:
        navigate('/page1');
        break;
      case 1:
        navigate('/page2');
        break;
      case 2:
        navigate('/page3');
        break;
      case 3:
        navigate('/page4');
        break;
      case 4:
        navigate('/page5');
        break;
      case 5:
        navigate('/page6');
        break;
      default:
        break;
    }
  };

  return (
    <mesh ref={meshRef} onPointerDown={handleClick}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach="material-0" map={right} />
      <meshStandardMaterial attach="material-1" map={left} />
      <meshStandardMaterial attach="material-2" map={top} />
      <meshStandardMaterial attach="material-3" map={bottom} />
      <meshStandardMaterial attach="material-4" map={front} />
      <meshStandardMaterial attach="material-5" map={back} />
    </mesh>
  );
};

export default Cube;