function HomePage() {
    return (
        <main className="w-full">
            <div className="h-screen bg-gradient-to-br from-cyan-700 to-blue-900 font-lobster text-teal-200 flex justify-center items-center">
                <h1 className="text-5xl m-10">Hello friend. <br /> I'm Brendan Musick, <br />Full Stack Developer. </h1>
            </div>
            <div className="h-screen bg-gradient-to-bl from-blue-900 to-cyan-700 flex justify-center items-center relative" id="complete">
                <div className="bg-red-400 w-1/4 h-1/2 rounded-3xl -skew-y-12 -translate-x-72 absolute">

                </div>
                <div className="bg-red-300 w-1/4 h-1/2 rounded-3xl -skew-y-6 -translate-x-36 absolute">

                </div>
                <div className="bg-red-400 w-1/4 h-1/2 rounded-3xl skew-y-12 translate-x-72 absolute">

                </div>
                <div className="bg-red-300 w-1/4 h-1/2 rounded-3xl skew-y-6 translate-x-36 absolute">

                </div>
                <div className="bg-red-100 w-1/4 h-1/2 rounded-3xl absolute">

                </div>

            </div>
            <div className="h-screen bg-gradient-to-br from-cyan-700 to-blue-900" id="in-progress">Progress</div>
        </main>
    )
}

export default HomePage;