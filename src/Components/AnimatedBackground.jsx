import { Box } from "@mui/material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Fragment, useEffect, useMemo, useState } from "react";
import { theme } from "../Theme";

const useMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;
  return [isMobile];
};

const AnimatedBackground = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const [isMobile] = useMobile();

  useEffect(() => {
    if (!isInitialized) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setIsInitialized(true);
      });
    }
  }, [isInitialized]);

  const options = useMemo(() => ({
    background: {
      color: {
        value: `${theme.palette.secondary.light}`
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "attract",
        },
      },
      modes: {
        push: {
          quantity: 6,
        },
        repulse: {
          distance: 100,
          duration: 10.0,
        },
        attract: {
          distance: 200,
          duration: 1,
          easing: "ease-in-out",
          factor: 10,
          maxSpeed: 25,
          speed: 1
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 200,
        enable: true,
        opacity: 0.5,
        width: 1.5,
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
          enable: isMobile,
        },
        value: 100,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        close: true,
        fill: true,
        options: {
          polygon: {
            sides: 6
          },
          star: {
            sides: 6,
            inset: 1.5
          }
        },
        type: ["polygon", "star"],
      },
      size: {
        value: { min: 1, max: 35 },
      },
    },
    detectRetina: true,
  }), [isMobile]);

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