import BottomCard from "../components/BottomCard";

export default function Home() {
  return (
    <div className="fixed flex w-full h-full justify-center items-center bg-slate-800">
      <div className="flex flex-col items-center mb-24 z-[1] p-2">
        <h2 className="text-white text-[60px] font-bold text-center">
          Brendan Musick
        </h2>
        <p className="text-purple-300 text-center">Full Stack Developer</p>
        <div className="flex justify-evenly w-1/2 lg:w-1/3">
          <a
            href="/register"
            className="bg-sky-500 text-white px-3 py-1 rounded-xl mt-5"
          >
            View All Projects
          </a>
          <a
            href="/documentation"
            className="bg-sky-500 text-white px-3 py-1 rounded-xl mt-5"
          >
            Read docs
          </a>
        </div>
      </div>
      <div className="fixed z-[0] h-full w-1/2 right-0 overflo">
        {/* <DNAAnimation /> */}
      </div>
      <div className="fixed bottom-0 w-full sm:w-2/3 h-[170px] flex justify-evenly">
        <BottomCard
          url="/projects"
          imageUrl="/imgs/icons/ucn.png"
          title="UCN Website Developer"
          description="I am the website administrator and developer for University College of the North. Learn more here."
        />
        <BottomCard
          url="/projects"
          imageUrl="/imgs/icons/umanitoba.svg"
          title="Computer Science Major (BSc.)"
          description="I graduated with a Computer Science Degree in 2022. Learn more about my time at University."
        />
      </div>
    </div>
  );
}
