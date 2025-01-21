import { HashRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage.tsx';
import BlogShowPage from './pages/BlogShowPage.tsx';
import ResumePage from './pages/ResumePage.tsx';
import NavigationBar from './components/NavigationBar.tsx';
import ScrollToAnchor from './ScrollToAnchor';
import Socials from './components/Socials.tsx';
import { useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext.tsx'
import Modal from './components/Modal.tsx';
import ProjectGallery from './views/ProjectGallery.tsx';
import { proj } from '/src/data.json'

export default function App() {
  const [isLight, setIsLight] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const [modalContent, setModalContent] = useState({})

  useEffect(()=>{
    let currentUrlPath = location.pathname.slice(9,);

      if(location.state && location.state.hasOwnProperty('modalContent')) {
        setModalContent(location.state.modalContent)
      }
      else if(Object.keys(proj).includes(currentUrlPath) && proj[currentUrlPath]){
        setModalContent(proj[currentUrlPath])
      }
  }, [location])

  return (
    <ThemeContext.Provider value={{isLight, setIsLight}}>
      <div className={`h-screen w-full ${!isLight && 'dark'}`}>
        <div className={`
          h-full
          flex 
          justify-center 
          bg-gradient-to-br from-cyan-700 to-blue-900 dark:from-cyan-900 dark:to-gray-900`}
        >
          {/* Fragment */}
            <ScrollToAnchor />
            <NavigationBar />
            <Socials linkedin="https://www.linkedin.com/in/brendanmusick" github="https://github.com/B-Musick"/>
            <Routes location={location}>
              {/* Make sure only one route shown at a time */}
              {/* Content inswitch depends on the route */}
              <Route path="/">
                <Route index={true} path="" element={<HomePage />} />
                <Route index={true} path="/about" element={<AboutPage />} />
                <Route index={true} path="/resume" element={<ResumePage />} />
                {/* <Route index={true} path="/blog" element={<BlogPage />} /> */}
              </Route>
              <Route path="/blog">
                <Route index={true} element={<BlogPage />} />
                <Route index={false} path=":blogId" element={<BlogShowPage />} />
              </Route>
              {Object.keys(modalContent).length > 0  && 
              (
                  <Route 
                    path="/project/:id" 
                    element={
                      <Modal 
                        classes={modalContent.classes} 
                        childClasses={modalContent.childClasses} 
                        className="z-[0]"
                        onClose={()=>navigate(location.state && location.state.hasOwnProperty('previousLocation') ? location.state.previousLocation: "/", {replace: true})} 
                      >
                        <ProjectGallery modalContent={modalContent ? modalContent: location.state.modalContent}/>
                      </Modal>
                    } 
                  />
              )}
            </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}