import { v4 as uuid } from "uuid";
import projectImg from '../images/projectImg.png';

const projects = [
  {
    id: uuid(),
    name: 'Mobile 3D motion Track',
    desc: '',
    img: projectImg,
  },
  {
    id: uuid(),
    name: 'Rage',
    desc: '',
    img: projectImg,
  },
];

export default projects;
