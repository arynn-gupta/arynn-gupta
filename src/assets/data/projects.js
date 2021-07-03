import { v4 as uuid } from "uuid";
import projectImg from '../images/projectImg.png';

const projects = [
  {
    id: uuid(),
    name: 'Flutter',
    desc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est quod, itaque ducimus quos illo voluptas voluptatum tempora necessitatibus vitae dolorum exercitationem? Similique animi unde dolor excepturi, fuga possimus error.',
    img: projectImg,
  },
  {
    id: uuid(),
    name: 'Python',
    desc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est quod, itaque ducimus quos illo voluptas voluptatum tempora necessitatibus vitae dolorum exercitationem? Similique animi unde dolor excepturi, fuga possimus error.',
    img: projectImg,
  },
  {
    id: uuid(),
    name: 'Android',
    desc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est quod, itaque ducimus quos illo voluptas voluptatum tempora necessitatibus vitae dolorum exercitationem? Similique animi unde dolor excepturi, fuga possimus error.',
    img: projectImg,
  },
  {
    id: uuid(),
    name: "React",
    desc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est quod, itaque ducimus quos illo voluptas voluptatum tempora necessitatibus vitae dolorum exercitationem? Similique animi unde dolor excepturi, fuga possimus error.',
    img: projectImg,
  },
];

export default projects;
