"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import ContributionSection from "./ContributionPage";
import AlumniSpotlight from "./AlumniSpotlight";
import OldPage from "./OldPage";

// --- CONFIGURATION ---
const GLOBE_RADIUS = 2;
const AUTO_ROTATE_SPEED = 0.9;
const CAROUSEL_INTERVAL = 10000; // 5 Seconds

// --- ASSETS & DATA ---
const EARTH_DAY_TEXTURE = "/textures/earth2k.jpg"; // High-res Earth texture

const ALUMNI_LOCATIONS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Senior Product Manager",
    company: "Google",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    lat: 40.7128,
    lon: -74.006,
    location: "New York, USA",
    img: "/boy.png",
    bio: "Leading the Maps integration team. Graduated Batch of 2018.",
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Tech Lead",
    company: "Microsoft",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    lat: 19.076,
    lon: 72.8777,
    location: "Mumbai, India",
    img: "/boy.png",
    bio: "Architecting cloud solutions for Azure. Graduated Batch of 2019.",
  },
  {
    id: 3,
    name: "Chen Wei",
    role: "Data Scientist",
    company: "Alibaba",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/en/8/80/Alibaba-Group-Logo.svg",
    lat: 31.2304,
    lon: 121.4737,
    location: "Shanghai, China",
    img: "/boy.png",
    bio: "Specializing in AI-driven logistics. Graduated Batch of 2020.",
  },
  {
    id: 4,
    name: "Emma Wood",
    role: "FinTech Consultant",
    company: "Deloitte",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
    lat: 51.5074,
    lon: -0.1278,
    location: "London, UK",
    img: "/boy.png",
    bio: "Consulting for top tier banking firms. Graduated Batch of 2017.",
  },
  {
    id: 5,
    name: "Lucas Silva",
    role: "UX Researcher",
    company: "Spotify",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    lat: -23.5505,
    lon: -46.6333,
    location: "São Paulo, Brazil",
    img: "/boy.png",
    bio: "Enhancing user discovery flows. Graduated Batch of 2021.",
  },
];

// --- HELPER ---
const latLongToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// --- COMPONENT: The Globe ---
const Globe = ({ selectedId, onSelect }) => {
  const globeRef = useRef();
  const colorMap = useLoader(THREE.TextureLoader, EARTH_DAY_TEXTURE);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial map={colorMap} roughness={1} metalness={0} />
      </mesh>
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[GLOBE_RADIUS, 32, 32]} />
        <meshBasicMaterial
          color="#4da6ff"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {ALUMNI_LOCATIONS.map((alum) => {
        const position = latLongToVector3(alum.lat, alum.lon, GLOBE_RADIUS);
        return (
          <Marker
            key={alum.id}
            data={alum}
            position={position}
            isSelected={selectedId === alum.id}
            onSelect={onSelect}
          />
        );
      })}
    </group>
  );
};

// --- COMPONENT: Interactive Marker ---
const Marker = ({ position, data, isSelected, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  // Use frame to pulse the selected marker
  useFrame(({ clock }) => {
    if (isSelected && meshRef.current) {
      const scale = 0.2 + Math.sin(clock.getElapsedTime() * 5) * 0.2; // Pulse effect
      meshRef.current.scale.set(scale, scale, scale);
    } else if (meshRef.current) {
      meshRef.current.scale.set(1, 1, 1);
    }
  });

  // Shared event handlers
  const handlePointerOver = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    setHovered(true);
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    setHovered(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(data);
  };

  const isActive = hovered || isSelected;

  return (
    <group position={position}>
      {/* 3D PIN GROUP */}
      <group
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        ref={meshRef} // Apply scale animation here
      >
        {/* Invisible Hitbox */}
        <mesh visible={false}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial />
        </mesh>

        {/* Visual Pin Head */}
        <mesh>
          <sphereGeometry args={[isSelected ? 0.06 : 0.04, 16, 16]} />
          <meshBasicMaterial color={isActive ? "#fb7035" : "#ffffff"} />
        </mesh>

        {/* Visual Pin Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <ringGeometry args={[0.06, 0.08, 32]} />
          <meshBasicMaterial
            color={isActive ? "#fb7035" : "#ffffff"}
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>

      {/* HTML OVERLAY */}
      <Html
        distanceFactor={12}
        zIndexRange={[5, 0]}
        style={{ pointerEvents: "auto" }}
      >
        <div
          onMouseEnter={handlePointerOver}
          onMouseLeave={handlePointerOut}
          onClick={handleClick}
          className={`flex flex-col items-center -translate-y-2/3 -translate-x-1/2 pb-2 cursor-pointer transition-transform duration-300 ${
            isActive ? "scale-80 z-0" : "scale-50 z-[-5]"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full overflow-hidden border-2 shadow-md mb-1 bg-white transition-colors duration-300 ${
              isActive ? "border-[#fb7035]" : "border-white"
            }`}
          >
            <img
              src={data.img}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`px-2 py-0.5 bg-slate-900/90 text-white text-[10px] font-bold rounded shadow-xl whitespace-nowrap transition-opacity duration-200 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {data.name}
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- COMPONENT: The Plane ---
const Airplane = () => {
  const planeRef = useRef();
  const { scene } = useGLTF("/airplane.glb");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.4;
    const radius = GLOBE_RADIUS + 0.6;
    if (planeRef.current) {
      planeRef.current.position.x = radius * Math.sin(t);
      planeRef.current.position.z = radius * Math.cos(t);
      planeRef.current.position.y = Math.sin(t * 2.5) * 0.3;
      planeRef.current.lookAt(
        radius * Math.sin(t + 0.1),
        Math.sin((t + 0.1) * 2.5) * 0.3,
        radius * Math.cos(t + 0.1),
      );
    }
  });

  return (
    <group ref={planeRef}>
      <primitive object={scene} scale={0.08} rotation={[0, 0, 0]} />
      <pointLight distance={1.5} intensity={1} color="#fb7035" />
    </group>
  );
};

useGLTF.preload("/airplane.glb");

const Loader = () => (
  <Html center>
    <div className="text-slate-500 text-sm font-semibold animate-pulse">
      Loading...
    </div>
  </Html>
);

export default function AlumniPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showMemoryLane, setShowMemoryLane] = useState(false);

  const selectedAlumni = ALUMNI_LOCATIONS[currentIndex];

  // Auto-Carousel Logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ALUMNI_LOCATIONS.length);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle Manual Selection
  const handleManualSelect = (data) => {
    const index = ALUMNI_LOCATIONS.findIndex((a) => a.id === data.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <>
      {/* UPDATED HERO SECTION - More Cohesive Design */}
      <div className="w-full bg-white flex flex-col-reverse lg:flex-row overflow-hidden relative lg:h-[84vh]">
        {/* --- LEFT SECTION - Centered & Balanced --- */}
        {/* Changed lg:w-2/5 to lg:w-1/2 for better breathing room */}
        <div className="w-full lg:w-2/5 p-6 md:p-6 flex flex-col justify-center  relative z-10 lg:h-full bg-white">
          {/* Inner Wrapper: This handles the horizontal centering within the left panel */}
          <div className="w-full max-w-2xl mx-auto flex flex-col justify-center">
            {/* Hero Title Section */}
            <div className="mb-8 lg:mb-10">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-1 bg-[#fb7035] rounded-full"></div>
                <span className="text-xs text-center font-semibold tracking-widest text-[#10404A] uppercase">
                  Global Network
                </span>
              </div>

              <h1 className="text-4xl text-center md:text-left xl:text-5xl font-bold tracking-tight text-[#10404A] mb-6 leading-[1.15]">
                Where Our <span className="text-[#fb7035]">Alumni</span>
                <br />
                Shape The World
              </h1>

              <p className="text-center md:text-left text-slate-700 text-base max-w-md font-medium leading-relaxed">
                IGSB alumni are pioneering innovation across 45 countries,
                transforming industries and driving global change from Silicon
                Valley to Singapore.
              </p>
            </div>

            {/* Alumni Card - Updated Design */}
            <div className="w-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
              {/* Card Header with Gradient */}
              <div className="h-20 bg-gradient-to-r from-[#10404A] to-[#1a5c6a] relative">
                <div className="absolute -bottom-8 left-6">
                  <div className="relative">
                    <img
                      src={selectedAlumni.img}
                      alt={selectedAlumni.name}
                      className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg bg-slate-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <div className="absolute bottom-3 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md">
                  <img
                    src={selectedAlumni.companyLogo}
                    alt="Logo"
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-10 px-6 pb-6">
                <div className="mb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-800 leading-none">
                        {selectedAlumni.name}
                      </h2>
                      <p className="text-[#fb7035] font-semibold text-xs mt-1">
                        {selectedAlumni.role}
                      </p>
                    </div>
                    <div className="flex items-center text-slate-600 text-xs bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      {selectedAlumni.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 mt-4 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                  "{selectedAlumni.bio}"
                </p>

                <div className="border-t border-slate-100 pt-4 flex gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                      Company
                    </span>
                    <span className="text-slate-800 text-sm font-semibold">
                      {selectedAlumni.company}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                      Batch
                    </span>
                    <span className="text-slate-800 text-sm font-semibold">
                      2018
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full h-1 bg-slate-100">
                <div
                  key={selectedAlumni.id}
                  className="h-full bg-gradient-to-r from-[#fb7035] to-orange-400"
                  style={{
                    width: "100%",
                    animation: isPaused
                      ? "none"
                      : `progress ${CAROUSEL_INTERVAL}ms linear`,
                  }}
                ></div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center lg:justify-start gap-2 mt-8">
              {ALUMNI_LOCATIONS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#fb7035] w-8"
                      : "bg-slate-300 hover:bg-slate-400 w-2"
                  }`}
                  aria-label={`View alumni ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SECTION (Globe) --- */}
        {/* Changed lg:w-3/5 to lg:w-1/2 to match the new 50/50 layout */}
        <div
          className="w-full h-[50vh] lg:h-full lg:w-3/5 relative cursor-move lg:absolute lg:right-0 lg:top-0 lg:bottom-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent z-10 pointer-events-none lg:block hidden"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,112,53,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
            {/* ... keeping your existing globe/canvas setup ... */}
            <color attach="background" args={["#fff"]} />
            <fog attach="fog" args={["#f8fafc", 5, 12]} />
            <ambientLight intensity={1.8} color="#ffffff" />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.5}
              color="#ffffff"
              castShadow
            />
            <directionalLight
              position={[-5, -3, -5]}
              intensity={0.5}
              color="#4da6ff"
            />
            <pointLight
              position={[0, 0, -8]}
              intensity={0.3}
              color="#fb7035"
              distance={12}
            />
            <Suspense fallback={<Loader />}>
              <Globe
                selectedId={selectedAlumni.id}
                onSelect={handleManualSelect}
              />
            </Suspense>
            <Airplane />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={AUTO_ROTATE_SPEED}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>

          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg text-xs text-slate-600 hidden lg:block">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>Drag to rotate globe • Click pins for details</span>
            </div>
          </div>
        </div>
      </div>

      <AlumniSpotlight />
      <ContributionSection />

      {/* Memory Lane Section */}
      <div className="w-full bg-white border-t border-slate-200">
        <button
          onClick={() => setShowMemoryLane(!showMemoryLane)}
          className="w-full py-8 flex flex-col items-center justify-center transition-colors duration-300 group cursor-pointer outline-none"
        >
          <div className="flex items-center gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
            <h3 className="text-lg font-bold tracking-wide uppercase">
              Revisit Memory Lane
            </h3>
            <svg
              className={`w-5 h-5 transition-transform duration-500 ${
                showMemoryLane ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-medium tracking-widest opacity-80 group-hover:opacity-100">
            CLICK TO EXPAND ARCHIVE
          </p>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            showMemoryLane ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className=" border-t border-slate-100 bg-white shadow-inner">
              <OldPage />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
