import headshot from '../assets/imgs/headshot.jpeg';

function AboutPage() {
    return (
        <main>
            <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-cyan-700 to-blue-900">
                <div className="w-1/2 pl-10">
                    <h1 className="font-lobster text-teal-300 text-5xl">Brendan Musick</h1>
                    <h2 className="font-lobster text-teal-200 text-3xl mt-2">Full Stack Developer</h2>
                    <p className="font-roboto text-teal-100 mt-5">
                        I am a self taught Full Stack Developer whom later returned to University to complete their Computer Science degree.
                    </p>
                </div>
                <div className="pl-10 w-1/2 justify-center flex">
                    <img src={headshot} className='object-cover h-60 w-48 rounded-full'/>
                </div>
            </div>
        </main>
    )
}

export default AboutPage;