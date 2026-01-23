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
const CAROUSEL_INTERVAL = 3000; // 3 Seconds

// --- ASSETS & DATA ---
const EARTH_DAY_TEXTURE = "/textures/earth2k.webp";

const ALUMNI_LOCATIONS = [
  {
    id: 1,
    name: "Choudhary Shayan Izhar",
    role: "Wealth Management Analyst",
    company: "UBS Bank",
    companyLogo: "/logos/15.webp",
    lat: 18.9582,
    lon: 72.8321,
    location: "Mumbai, India",
    img: "/IGSB/Alumni/NewAlumni/shayan_choudhary.webp",
    bio: "",
  },
  {
    id: 2,
    name: "Shelke Vaishnavi Shrikant",
    role: "Management Trainee",
    company: "Bajaj General Insurance",
    companyLogo: "/logos/bagic.png", // Placeholder
    lat: 18.53, // Offset for Pune
    lon: 73.85,
    location: "Pune, India",
    img: "/IGSB/Alumni/NewAlumni/shelke_vaishnavi.webp",
    bio: "",
  },
  {
    id: 3,
    name: "Soham Prashant Ghule",
    role: "Management Trainee",
    company: "BNY Mellon",
    companyLogo: "/logos/3.webp",
    lat: 18.5246,
    lon: 73.8786,
    location: "Pune, India",
    img: "/IGSB/Alumni/NewAlumni/soham_ghule.webp",
    bio: "",
  },
  // {
  //   id: 4,
  //   name: "Aditi Ravindra Sharma",
  //   role: "Management Trainee",
  //   company: "Eka Mobility",
  //   companyLogo: "/logos/eka.webp", // Placeholder
  //   lat: 18.51, // Offset for Pune
  //   lon: 73.82,
  //   location: "Pune, India",
  //   img: "/IGSB/Alumni/NewAlumni/aditi_sharma.webp",
  //   bio: "",
  // },
  // {
  //   id: 5,
  //   name: "Aashish B Dhakane",
  //   role: "Intern + PPO",
  //   company: "State Street Corporation",
  //   companyLogo: "/logos/statestreet.webp", // Placeholder
  //   lat: 18.545, // Offset for Pune
  //   lon: 73.885,
  //   location: "Pune, India",
  //   img: "/IGSB/Alumni/NewAlumni/aashish_dhakane.webp",
  //   bio: "",
  // },
  // {
  //   id: 6,
  //   name: "Bhavesh Gulab Patil",
  //   role: "Intern + PPO",
  //   company: "State Street Corporation",
  //   companyLogo: "/logos/statestreet.webp", // Placeholder
  //   lat: 18.535, // Offset for Pune
  //   lon: 73.875,
  //   location: "Pune, India",
  //   img: "/IGSB/Alumni/NewAlumni/bhavesh_patil.webp",
  //   bio: "",
  // },
  // {
  //   id: 7,
  //   name: "Chintalwar Tanisha",
  //   role: "Intern + PPO",
  //   company: "State Street Corporation",
  //   companyLogo: "/logos/statestreet.webp", // Placeholder
  //   lat: 18.515, // Offset for Pune
  //   lon: 73.865,
  //   location: "Pune, India",
  //   img: "/IGSB/Alumni/NewAlumni/chintalwar_tanisha.webp",
  //   bio: "",
  // },
  {
    id: 4,
    name: "Varad Sunil Kulkarni",
    role: "Management Trainee",
    company: "Blue Dart",
    companyLogo: "/logos/41.webp", // Placeholder
    lat: 19.076, // Mapped "Western India" to Mumbai for better distribution
    lon: 72.8777,
    location: "Western India",
    img: "/IGSB/Alumni/NewAlumni/varad_kulkarni.webp",
    bio: "",
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

// --- COMPONENT: Interactive Marker (FIXED OVERLAP) ---
const Marker = ({ position, data, isSelected, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const isActive = hovered || isSelected;

  // Pulse effect
  useFrame(({ clock }) => {
    if (isSelected && meshRef.current) {
      const scale = 0.2 + Math.sin(clock.getElapsedTime() * 5) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    } else if (meshRef.current) {
      meshRef.current.scale.set(1, 1, 1);
    }
  });

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

  return (
    <group position={position}>
      {/* 3D PIN GEOMETRY */}
      <group
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        ref={meshRef}
      >
        <mesh visible={false}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial />
        </mesh>
        <mesh>
          <sphereGeometry args={[isSelected ? 0.06 : 0.04, 16, 16]} />
          <meshBasicMaterial color={isActive ? "#fb7035" : "#ffffff"} />
        </mesh>
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

      {/* HTML OVERLAY - FIXED Z-INDEX & OVERLAP */}
      <Html
        distanceFactor={12}
        // CRITICAL FIX: Give active elements a much higher Z-Index so they overlay neighbors
        zIndexRange={isActive ? [10, 0] : [0, 0]}
        style={{
          pointerEvents: "none", // Allows clicking "through" the empty HTML container space
          userSelect: "none",
        }}
      >
        <div
          onMouseEnter={handlePointerOver}
          onMouseLeave={handlePointerOut}
          onClick={handleClick}
          // Added 'pointer-events-auto' to re-enable interaction on the actual visible div
          className={`flex flex-col items-center -translate-y-2/3 -translate-x-1/2 pb-2 cursor-pointer pointer-events-auto transition-all duration-300 ease-out origin-bottom ${
            isActive ? "scale-100 z-50" : "scale-40 z-0 grayscale"
          }`}
        >
          {/* Avatar Bubble */}
          <div
            className={`w-8 h-8 rounded-full overflow-hidden border-2 shadow-md mb-1 bg-white transition-colors duration-300 ${
              isActive ? "border-[#fb7035]" : "border-white/80"
            }`}
          >
            <img
              src={data.img}
              alt={data.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text Label - Only visible when Active/Hovered to reduce clutter */}
          <div
            className={`px-2 py-0.5 bg-slate-900/95 text-white text-[8px] font-bold rounded shadow-xl whitespace-nowrap transition-all duration-200 ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ALUMNI_LOCATIONS.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualSelect = (data) => {
    const index = ALUMNI_LOCATIONS.findIndex((a) => a.id === data.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <div className="w-full bg-white flex flex-col-reverse lg:flex-row overflow-hidden relative lg:h-[84vh]">
        {/* --- LEFT SECTION --- */}
        <div className="w-full lg:w-1/2 p-6 md:p-6 flex flex-col justify-center relative z-10 lg:h-full bg-white">
          <div className="w-full max-w-2xl mx-auto flex flex-col justify-center">
            <div className="mb-8 lg:mb-10">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-1 bg-[#fb7035] rounded-full"></div>
                <span className="text-xs text-center font-semibold tracking-widest text-[#10404A] uppercase">
                  Global Network
                </span>
              </div>

              <h1 className="text-4xl text-center md:text-left xl:text-5xl font-bold tracking-tight text-[#10404A] mb-6 leading-[1.15]">
                We Build <span className="text-[#fb7035]">Careers</span>
                <br />
                Without Borders
              </h1>

              <p className="text-center md:text-left text-slate-700 text-base max-w-md font-medium leading-relaxed">
                Our alumni network is spread across multiple global organizations, reflecting strong
                career outcomes and professional mobility.
              </p>
            </div>

            {/* --- UPDATED ALUMNI CARD --- */}
            <div className="w-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
              {/* Header Gradient */}
              <div className="h-24 bg-gradient-to-r from-[#10404A] to-[#1a5c6a] relative"></div>

              {/* Profile & Logo Row (Overlap) */}
              <div className="px-6 flex justify-between items-end -mt-10 relative z-10">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={selectedAlumni.img}
                    alt={selectedAlumni.name}
                    className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg bg-slate-200"
                  />
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>

                {/* ENHANCED Company Logo */}
                <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 mb-2">
                  <img
                    src={selectedAlumni.companyLogo}
                    alt="Company Logo"
                    className="h-18 w-auto max-w-[120px] object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-3 px-6 pb-6">
                <div className="mb-4">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                      {selectedAlumni.name}
                    </h2>
                    <p className="text-[#fb7035] font-semibold text-sm mt-1">
                      {selectedAlumni.role}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 grid grid-cols-2 gap-4">
                  {/* Location */}
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                      Location
                    </span>
                    <div className="flex items-center text-slate-700 font-semibold text-sm">
                      <svg
                        className="w-4 h-4 mr-1 text-slate-400"
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

                  {/* Company Text */}
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                      Organization
                    </span>
                    <span className="text-slate-700 font-semibold text-sm">
                      {selectedAlumni.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
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
        <div
          className="w-full h-[50vh] lg:h-full lg:w-1/2 relative cursor-move lg:absolute lg:right-0 lg:top-0 lg:bottom-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent z-10 pointer-events-none lg:block hidden"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,112,53,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
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
