import React from "react";
import config from "./config.json";
import { checkWindow } from "@/utils";
require("./particle");

interface IParticleProps {
  // config: any;
  id?: string;
}

const params = {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: "#d2d2d2" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  retina_detect: true,
};

const Particles = (props: IParticleProps) => {
  const init = () => {
    const doc = document.getElementById(props.id || "main");
    if (doc && checkWindow()) {
      try {
        window.particlesJS.load(props.id || "main", params, function () {
          console.log("callback - particles.js config loaded");
        });
      } catch (error) {
        console.error(
          `The Particle.js is missing in the module, please add  ==> require('coditas-ui/dist/components/Particles/particle') <== to the file you want to use Particles`
        );
      }
    }
  };

  React.useEffect(() => {
    init();
  });
  return <div id="main" />;
};

export default Particles;
