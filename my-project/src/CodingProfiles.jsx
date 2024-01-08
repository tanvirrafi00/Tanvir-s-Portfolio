import SectionTitle from "./SectionTitle";
import { profiles } from "../assets/data";
import SingleProfile from "./SingleProfile";

const CodingProfiles = () => {
  return (
    <section className="py-20 allign_element" id="coding profiles">
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <SectionTitle text="Competitive Programming " />
        <p className="text-slate-600 mt-8 leading-loose text-center">
          A dedicated problem solver, I honed my skills through extensive
          competitive programming during university, participating in numerous
          contests. Proficient in C++ and armed with a strong command of
          algorithms, my coding profile reflects a passion for overcoming
          challenges. I consistently showcased adaptability and strategic
          thinking, crafting efficient and elegant solutions. Whether in team
          challenges or solo endeavors, my commitment to excellence and love for
          problem-solving set me apart. My journey through competitive
          programming has not only enriched my proficiency but instilled a
          resilient and innovative approach, making me a valuable asset in
          dynamic coding environments.
        </p>

        <div className="grid  grid-cols-1 w-full sm:grid-cols-2 gap-2 ">
          {profiles.map((profile) => {
            return <SingleProfile key={profile.id} {...profile} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
