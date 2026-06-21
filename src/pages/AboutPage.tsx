import Heading from "../components/Heading";
import headshot from "/imgs/headshot.jpeg";

function AboutPage() {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-center w-screen">
        <div className="pl-10 md:w-1/2 mt-36 justify-center flex">
          <img src={headshot} className="object-cover h-60 w-48 rounded-full" />
        </div>
        <div className="md:w-1/2 p-10 md:mt-36">
          <Heading level={1} text="Brendan Musick" />

          <h2 className="text-purple-300 text-xl">Full Stack Developer</h2>
          <hr />
          <p className="mt-5">
            I am a self taught Full Stack Developer whom later returned to
            University to complete their Computer Science degree.
          </p>
          <p className="mt-5">
            Working at Antec Controls after graduation gave me experience
            working with jumping into new enterprise codebases, orienting myself
            within them quick enough to make tasked changes. I gained a deeper
            knowledge into different software designs such as
            Model-View-ViewModel(MVVM), Model-View-Controller (MVC), separation
            of concerns and security between the UI and API.
          </p>
          <p className="mt-5">
            I've been able to network with colleagues and gain self-employment
            working with more autonomy. Working on the ERP system for Protec
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
