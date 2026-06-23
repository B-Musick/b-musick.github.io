import Button from "../components/Button";
import { GiClown } from "react-icons/gi";

export default function ErrorPage({ url }) {
  return (
    <div className="flex flex-col justify-center h-full p-10">
      <h1 className="text-center">404 - Page Not Found</h1>
      <p>
        It looks like you were trying to access <b>{url}</b> which doesnt
        exists. Find relevent content by browsing through the links below.
      </p>
      <div className="flex items-center justify-center">
        <Button url={"/projects"} text="Projects" />
      </div>
      <div className="flex justify-center md:justify-end h-1/3 items-center">
        <GiClown size={200} />
      </div>
    </div>
  );
}
