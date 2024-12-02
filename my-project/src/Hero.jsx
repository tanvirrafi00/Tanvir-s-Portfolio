/* eslint-disable react/no-unescaped-entities */
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24" id="Home">
      <div className="allign_element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Tanvir Rafi</h1>

          <p className="mt-4 text-2xl text-slate-700 capitalize tracking-wide">
             QA Automation| Competitive Programmer
          </p>

          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/tanvirrafi00">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/tanvir-rafi-264bb1190/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            
            <a href="https://codeforces.com/profile/Tanvirrafi">
              <img
                src="/images/cf.svg"
                alt=""
                className="h-8 w-8 text-slate-500 hover:text-black duration-300"
              />
            </a>
           
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
