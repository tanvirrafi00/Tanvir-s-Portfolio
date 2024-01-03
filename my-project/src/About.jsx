/* eslint-disable react/no-unescaped-entities */
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="allign-element grid md:grid-cols-2 items-center gap-5">
        <img src={aboutSvg} className="w-full h-64" />

        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am Tanvir Rafi, a soon-to-be graduate in Computer Science and
            Engineering from the International Islamic University Chittagong.
            Specializing in web development with proficiency in JavaScript,
            HTML, CSS, and React, my technical prowess extends to competitive
            programming.
            <br />
            I have consistently demonstrated excellence in various coding
            contests, honing my coding speed and cultivating advanced
            problem-solving skills. My expertise lies in algorithmic mastery,
            enabling me to navigate intricate challenges efficiently.
            <br />
            Approaching graduation, I am poised to leverage my skills in
            real-world applications. Seeking opportunities that demand a
            strategic blend of web development, competitive programming, and
            algorithmic proficiency, I am committed to making impactful
            contributions in the dynamic landscape of technology. Let's connect
            and explore how my skills align with your organization's objectives.
            <br />
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
