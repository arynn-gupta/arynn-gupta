import { v4 as uuid } from 'uuid';
import flappy from '../images/projects/flappy.png';
import materialui from '../images/projects/material-ui.png';
import bullseye from '../images/projects/bullseye.png';
import ocr from '../images/projects/ocr.png';
import arshop from '../images/projects/arshop.png';
import greywing from '../images/projects/greywing.png';

const projects = [
  {
    id: uuid(),
    name: 'AR Shop',
    desc: 'An Augmented Reality based E-commerce App built using Flutter and ARCore.',
    img: arshop,
    url: 'https://github.com/arynn-gupta/ar_shop',
  },
  {
    id: uuid(),
    name: 'Greywing UI',
    desc: 'A web experience made for greywing.',
    img: greywing,
    url: 'https://github.com/arynn-gupta/greywing',
  },
  {
    id: uuid(),
    name: 'Flappy.ai',
    desc: 'Python based AI application that uses NeuroEvolution of Augmenting Topologies to train agent to play Flappy Bird game .',
    img: flappy,
    url: 'https://github.com/arynn-gupta/flappy.ai',
  },
  {
    id: uuid(),
    name: 'MaterialUI Dashboard',
    desc: 'React.js implementation of a dribble ui prototype by Shivangi Mahajan',
    img: materialui,
    url: 'https://github.com/arynn-gupta/material-ui-dashboard',
  },
  {
    id: uuid(),
    name: 'Bullseye',
    desc: 'PyGame based Path Finding Visualizer that uses the A* Algorithm to find the shortest path between two points .',
    img: bullseye,
    url: 'https://github.com/arynn-gupta/bullseye',
  },
  {
    id: uuid(),
    name: 'OCR & Object Recognition',
    desc: 'Python application for object detection and text recognition using kivy for gui and tensorflow for object recognition , trained on YOLO dataset.',
    img: ocr,
    url: 'https://github.com/arynn-gupta/OCR-and-Object-Recognition',
  },
];

export default projects;
