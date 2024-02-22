import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
export default function BackgroundBg() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    preset: "stars",
    size: {
      value: { min: 0.05, max: 0.15 },
    },
    particles: {
      height: 200,
      color: { value: "#ffff" }, // Particle color
      number: { value: 100 }, // Number of particles
      shape: { type: "circle" }, // Particle shape (circle, edge, triangle, polygon, etc.)
      opacity: { value: 0.7, random: true }, // Particle opacity
      size: { value: 3, random: true }, // Particle size
      move: {
        enable: true,
        speed: 2, // Particle movement speed
        direction: "none", // Particle movement direction (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
        random: false,
      },
      line_linked: {
        enable: true,
        distance: 150, // Distance between connected particles
        color: "#ffffff", // Color of the connecting lines
        opacity: 0.5, // Opacity of the connecting lines
        width: 1, // Width of the connecting lines
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" }, // Make particles grab the cursor on hover
        onclick: { enable: true, mode: "push" }, // Push particles on click
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } }, // Grab settings
        push: { particles_nb: 4 }, // Particle pushing settings
      },
    },
  };

  return (
    <div id="tsparticles-custom">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
