import Heading from "../components/Heading";
import headshot from "/imgs/headshot.jpeg";

function AboutPage() {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-center w-screen">
        <div className="p-5 md:w-1/3 mt-8 justify-center flex h-full">
          <img src={headshot} className="object-cover h-full" />
        </div>
        <div className="md:w-2/3 p-10 md:mt-36">
          <Heading level={1} text="Brendan Musick" />

          <h2 className="text-purple-300 text-xl">Full Stack Developer</h2>
          <hr />
          <p className="mt-5">
            Hi, I'm Brendan, a software and web developer with a passion for
            building modern, responsive, and user-focused applications.
          </p>
          <p className="mt-5">
            I enjoy turning ideas into reliable, scalable software, whether
            that's developing full-stack web applications, creating intuitive
            user interfaces, or designing APIs that power seamless user
            experiences.
          </p>
          <p className="mt-5">
            My primary technologies include React, Node.js, HTML, CSS, and PHP,
            and I'm always expanding my skills by learning new frameworks and
            tools.I believe great software is more than just working code—it's
            maintainable, accessible, and enjoyable to use. I enjoy tackling
            challenging problems, learning new technologies, and continuously
            improving my craft.
          </p>
          <p className="mt-5">
            When I'm not coding, you'll usually find me exploring new
            technologies, contributing to personal projects, or learning
            something new that helps me become a better developer. I also enjoy
            golf and reading non-fiction science and science fiction.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
