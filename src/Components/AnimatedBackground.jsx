import { Box } from "@mui/material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Fragment, useEffect, useMemo, useState } from "react";
import { theme } from "../Theme";

const AnimatedBackground = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setIsInitialized(true);
      });
    }
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: `${theme.palette.secondary.light}`
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 1.0,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 25 },
      },
    },
    detectRetina: true,
  }), []);

  if (isInitialized) {
    return (
      <Box
        position='absolute'
        zIndex='-1'>
        <Particles
          id="tsparticles"
          options={options}
        // particlesLoaded={particlesLoaded}
        />
      </Box>
    );
  }

  return (
    <Fragment></Fragment>
  );
}

export default AnimatedBackground;