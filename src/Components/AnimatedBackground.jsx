import { Box } from "@mui/material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Fragment, useEffect, useMemo, useState } from "react";
import { theme } from "../Theme";
import { useMobile } from "../Hooks/useMobile";

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
    autoPlay: true,
    background: {
      color: {
        value: `${theme.palette.secondary.light}`
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff"
        },
        opacity: 1
      },
      enable: false
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "windows",
      events: {
        onHover: {
          enable: true,
          mode: "attract"
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1
        },
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
          easing: "ease-out-quad",
          factor: 10,
          maxSpeed: 25,
          speed: 1
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffffff"
              },
              stop: {
                value: "#000000ff"
              }
            },
            radius: 100
          }
        }
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 50,
        enable: true,
        opacity: 0.75,
        width: 1.5,
      },
      move: {
        direction: "none",
        enable: true,
        size: true,
        outModes: {
          default: "destroy",
        },
        random: false,
        speed: 4,
        straight: true,
        trail: {
          enable: true,
          length: 6,
          fill: {
            color: `${theme.palette.secondary.main}`
          }
        }
      },
      number: {
        density: {
          enable: isMobile,
          height: 1920, 
          width: 1080
        },
        value: 100,
      },
      opacity: {
        value: 1,
      },
      shape: {
        close: true,
        fill: true,
        options: {
          polygon: {
            sides: 6
          }
        },
        type: "polygon",
      },
      size: {
        value: 1,
      },
    },
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