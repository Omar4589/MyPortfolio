/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: particleOptions.js
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import mongoDBIcon from "../../assets/svgs/mongoDBIcon.svg";
import reactIcon from "../../assets/svgs/react.svg";
import nodejsIcon from "../../assets/svgs/noejs.svg";
import cssIcon from "../../assets/svgs/css.svg";
import htmlIcon from "../../assets/svgs/html.svg";
import apolloIcon from "../../assets/svgs/apollo.svg";
import graphqlIcon from "../../assets/svgs/graphql.svg";
import gitIcon from "../../assets/svgs/git.svg";
import githubIcon from "../../assets/svgs/github.svg";
import mysqlIcon from "../../assets/svgs/mysql.svg";
import jsSquareIcon from "../../assets/svgs/javascript-original.svg";
import githubWhiteIcon from "../../assets/svgs/githubWhite.svg";
import apolloWhiteIcon from "../../assets/svgs/apolloWhite.svg";

export const desktopParticlesOptions = {
  autoPlay: true,

  fullScreen: {
    enable: true,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: ["#F7DF1E", "#61DAFB", "#23E900", "#FF4622"],
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#000000",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
        maxValue: 0.9,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "image",
      image: [
        {
          src: mongoDBIcon,
          width: 100,
          height: 100,
        },
        {
          src: reactIcon,
          width: 100,
          height: 100,
        },
        {
          src: cssIcon,
          width: 100,
          height: 100,
        },
        {
          src: htmlIcon,
          width: 100,
          height: 100,
        },
        {
          src: nodejsIcon,
          width: 100,
          height: 100,
        },
        {
          src: apolloIcon,
          width: 100,
          height: 100,
        },
        {
          src: graphqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: gitIcon,
          width: 100,
          height: 100,
        },
        {
          src: githubIcon,
          width: 100,
          height: 100,
        },
        {
          src: mysqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: jsSquareIcon,
          width: 100,
          height: 100,
        },
      ],
    },
    size: {
      random: {
        enable: true,
        minimumValue: 10,
        maxValue: 25,
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#000000",
      },
      consent: true,
      distance: 100,
      enable: false,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};

export const mobileParticlesOptions = {
  autoPlay: true,

  fullScreen: {
    enable: true,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: ["#F7DF1E", "#61DAFB", "#23E900", "#FF4622"],
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#000000",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 15,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
        maxValue: 0.9,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "image",
      image: [
        {
          src: mongoDBIcon,
          width: 100,
          height: 100,
        },
        {
          src: reactIcon,
          width: 100,
          height: 100,
        },
        {
          src: cssIcon,
          width: 100,
          height: 100,
        },
        {
          src: htmlIcon,
          width: 100,
          height: 100,
        },
        {
          src: nodejsIcon,
          width: 100,
          height: 100,
        },
        {
          src: apolloIcon,
          width: 100,
          height: 100,
        },
        {
          src: graphqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: gitIcon,
          width: 100,
          height: 100,
        },
        {
          src: githubIcon,
          width: 100,
          height: 100,
        },
        {
          src: mysqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: jsSquareIcon,
          width: 100,
          height: 100,
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 10,
        maxValue: 25,
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#000000",
      },
      consent: true,
      distance: 100,
      enable: false,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};

export const mobileParticlesOptionsDarkTheme = {
  autoPlay: true,

  fullScreen: {
    enable: true,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: ["#F7DF1E", "#61DAFB", "#23E900", "#FF4622"],
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#000000",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 15,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
        maxValue: 0.9,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "image",
      image: [
        {
          src: mongoDBIcon,
          width: 100,
          height: 100,
        },
        {
          src: reactIcon,
          width: 100,
          height: 100,
        },
        {
          src: cssIcon,
          width: 100,
          height: 100,
        },
        {
          src: htmlIcon,
          width: 100,
          height: 100,
        },
        {
          src: nodejsIcon,
          width: 100,
          height: 100,
        },
        {
          src: apolloWhiteIcon,
          width: 100,
          height: 100,
        },
        {
          src: graphqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: gitIcon,
          width: 100,
          height: 100,
        },
        {
          src: githubWhiteIcon,
          width: 100,
          height: 100,
        },
        {
          src: mysqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: jsSquareIcon,
          width: 100,
          height: 100,
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 10,
        maxValue: 25,
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#000000",
      },
      consent: true,
      distance: 100,
      enable: false,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};

export const desktopParticlesOptionsDarkTheme = {
  autoPlay: true,

  fullScreen: {
    enable: true,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: ["#F7DF1E", "#61DAFB", "#23E900", "#FF4622"],
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#000000",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
        maxValue: 0.9,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "image",
      image: [
        {
          src: mongoDBIcon,
          width: 100,
          height: 100,
        },
        {
          src: reactIcon,
          width: 100,
          height: 100,
        },
        {
          src: cssIcon,
          width: 100,
          height: 100,
        },
        {
          src: htmlIcon,
          width: 100,
          height: 100,
        },
        {
          src: nodejsIcon,
          width: 100,
          height: 100,
        },
        {
          src: apolloWhiteIcon,
          width: 100,
          height: 100,
        },
        {
          src: graphqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: gitIcon,
          width: 100,
          height: 100,
        },
        {
          src: githubWhiteIcon,
          width: 100,
          height: 100,
        },
        {
          src: mysqlIcon,
          width: 100,
          height: 100,
        },
        {
          src: jsSquareIcon,
          width: 100,
          height: 100,
        },
      ],
    },
    size: {
      random: {
        enable: true,
        minimumValue: 10,
        maxValue: 25,
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#000000",
      },
      consent: true,
      distance: 100,
      enable: false,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
