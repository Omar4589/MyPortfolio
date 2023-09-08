/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ParticlesComponent.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const TheParticles = (props) => {
  const { particlesOptions, id } = props;

  let isInitialized = false;

  const particlesInit = useCallback(async (engine) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <Particles
      style={{}}
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default TheParticles;
