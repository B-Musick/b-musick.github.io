import ResumeCard from "../components/ResumeCard";

function ResumePage(){
    const jobs = {
        company: 'Antec Controls',
        title: 'Application Designer',
        description: 'This is a job',
        startMonth: 'Jan',
        startYear: '',
        endMonth: 'Dec',
        endYear: '2023',
        skills: ['Vue.js', 'Javascript', 'CSS', 'HTML', 'C#', '.NET', 'php', 'Laravel']
    }
    return (
        <div className="h-screen w-full bg-gradient-to-br from-cyan-700 to-blue-900 font-roboto text-teal-200 flex justify-center items-center">
            <div className="h-3/5 w-3/8">
                <ResumeCard job={jobs}/>
            </div>
        </div>
    )
}

export default ResumePage;