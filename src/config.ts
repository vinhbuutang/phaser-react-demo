import { Game, Types } from 'phaser';
import { Level1, LoadingScene, UIScene } from './scenes';

type GameConfigExtended = Types.Core.GameConfig & { winScore: number };

const config: GameConfigExtended = {
  title: 'Kill the Big Bad Dev',
  type: Phaser.WEBGL,
  backgroundColor: '#351f1b',
  // width: 1920,
  // height: 1080,
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  callbacks: {
    postBoot: () => {
      window.sizeChanged();
    },
  },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [LoadingScene, Level1, UIScene],
  winScore: 40,
};

export default config;

// import Main from './scenes/Main';

// const config = {
//   type: Phaser.AUTO,
//   width: 1920,
//   height: 1080,
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: { y: 20 }
//     }
//   },
//   scene: Main
// }

// export default config;
