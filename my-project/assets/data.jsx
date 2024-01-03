import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#coding profiles", text: "coding profiles" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];
export const profiles = [
  {
    id: nanoid(),
    url: "https://codeforces.com/profile/Tanvirrafi",
    title: "Codeforces",
    icon: (
      <img
        src="/images/cf.svg"
        alt=""
        className="h-16 w-16 text-slate-500 hover:text-black duration-300"
      />
    ),
  },
  {
    id: nanoid(),
    url: "https://leetcode.com/Tanvir_rafi/",
    title: "Leetcode",
    icon: (
      <img
        src="/images/leetcode.svg"
        alt=""
        className="h-16 w-16 text-slate-500 hover:text-black duration-300"
      />
    ),
  },
  {
    id: nanoid(),
    url: "https://www.codechef.com/users/tanvir_rafi",
    title: "Codechef",
    icon: (
      <img
        src="/images/codechef.svg"
        alt=""
        className="h-16 w-16 text-slate-500 hover:text-black duration-300"
      />
    ),
  },
  {
    id: nanoid(),
    url: "https://www.hackerrank.com/Rafi_C193011",
    title: "HackerRank",
    icon: (
      <img
        src="/images/hackerRank.svg"
        alt=""
        className="h-16 w-16 text-slate-500 hover:text-black duration-300"
      />
    ),
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "C++",
    icon: (
      <img
        src="/images/c++.svg"
        alt=""
        className="h-16 w-16 text-emerald-500"
      />
    ),
    text: "Exceptional problem-solving skills in C++. Proficient coder with a strong grasp of algorithms and data structures, consistently delivering efficient solutions.",
  },
  {
    id: nanoid(),
    title: "C",
    icon: (
      <img src="/images/c.svg" alt="" className="h-16 w-16 text-emerald-500" />
    ),
    text: "Strong foundation in C programming, providing a solid framework for mastering C++. Proficient in building efficient solutions with a deep understanding of core programming principles.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://simple-dicegame.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
