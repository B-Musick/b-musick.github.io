import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage.tsx";
import BlogShowPage from "./pages/BlogShowPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import Socials from "./components/Socials.tsx";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext.tsx";
import Home from "./pages/Home.tsx";
import ProjectPage from "./pages/ProjectsPage.tsx";
import ProjectShowPage from "./pages/ProjectShowPage.tsx";
import ErrorPage from "./pages/404.tsx";

export default function App() {
  const [isLight, setIsLight] = useState(true);
  const location = useLocation();

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      <div className={`min-h-screen w-full ${!isLight && "dark"} `}>
        <div
          className={`
          min-h-screen
          flex 
          justify-center 
          bg-gradient-to-br from-white to-gray-200 dark:from-cyan-900 dark:to-gray-900 dark:text-white text-slate-900`}
        >
          <NavigationBar />
          <Socials
            linkedin="https://www.linkedin.com/in/brendanmusick"
            github="https://github.com/B-Musick"
          />
          <Routes location={location}>
            {/* Make sure only one route shown at a time */}
            {/* Content inswitch depends on the route */}
            <Route path="/">
              {/* <Route index={true} path="" element={<HomePage />} /> */}
              <Route index={true} path="" element={<Home />} />

              <Route index={true} path="/about" element={<AboutPage />} />
              <Route index={true} path="/resume" element={<ResumePage />} />
              {/* <Route index={true} path="/blog" element={<BlogPage />} /> */}
            </Route>
            <Route path="/blog">
              <Route index={true} element={<BlogPage />} />
              <Route index={false} path=":blogId" element={<BlogShowPage />} />
            </Route>
            <Route path="/projects">
              <Route index={true} element={<ProjectPage />} />
              <Route
                index={false}
                path=":projectId"
                element={<ProjectShowPage />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
