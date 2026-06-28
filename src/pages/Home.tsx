import BottomCard from "../components/BottomCard";
import Button from "../components/Button";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <div className="fixed flex w-full h-full justify-center items-center">
      <div className="flex flex-col items-center mb-24 z-[1] p-2">
        <Heading level={1} text="Brendan Musick" />
        <h2 className="text-purple-300 text-center text-xl">
          Full Stack Developer
        </h2>
        <div className="flex justify-evenly w-full">
          <Button url={"/#/about"} text={"About Me"} />
          <Button url={"/#/projects"} text={"View My Projects"} />
        </div>
      </div>
      <div className="fixed z-[0] h-full w-1/2 right-0 overflo">
        {/* <DNAAnimation /> */}
      </div>
      <div className="fixed bottom-0 w-full sm:w-2/3 flex justify-evenly items-end">
        <BottomCard
          classes="flex-1"
          url="/#/projects"
          imageUrl="/imgs/icons/ucn.png"
          title="UCN Website Developer"
          description="I am the website administrator and developer for University College of the North. Learn more here."
        />
        <BottomCard
          classes="flex-1"
          url="/#/computer-science"
          imageUrl="/imgs/icons/umanitoba.svg"
          title="Computer Science Major"
          description="I graduated with a Computer Science Degree in 2022. Learn more about my time at University."
        />
      </div>
    </div>
  );
}
