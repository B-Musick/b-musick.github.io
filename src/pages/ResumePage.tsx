import ResumeCard from "../components/ResumeCard.tsx";

function ResumePage(){
    const jobs = {
        company: 'Antec Controls',
        title: 'Application Designer',
        description: 'Developed the user interface for LUME Assistant desktop software. Responsible for scheduled changes and testing to Antec Select product ordering software. Implemented changes to the website to improve Google SEO. Added OAuth2.0 validation to one of Antecs Web APIs for ensured security.',
        startMonth: 'Jan',
        startYear: '',
        endMonth: 'Dec',
        endYear: '2023',
        skills: ['Vue.js', 'Javascript', 'CSS', 'HTML', 'C#', '.NET', 'php', 'Laravel', 'SEO'],
        link: 'https://anteccontrols.com/'
    }

    const selfEmployment = {
        company: 'Independent Contractor',
        title: 'Software Developer',
        description: `Over the past several months I have gained a couple clients for whom I do independent contract work part time. I have gained valuable experience working with a client, gathering enough
                        information for the features they want implemented and executing these changes in the software.`,
        startMonth: 'Jul 2023',
        startYear: '',
        endMonth: 'Current',
        endYear: '',
        skills: []
    }

    const homeStretchTherapy = {
        company: '-- Home Stretch Therapy',
        title: '',
        description: 'Made styling changes to pages to increase user readability and implemented changes to metadata, sitemap, headers to improve Google SEO. Monitoring results from changes in Google Search Console and improving based on these results.',
        startMonth: 'Jan 2024',
        startYear: '',
        endMonth: 'Current',
        endYear: '',
        skills: ['CSS', 'HTML', 'Squarespace', 'Google Search Console', 'SEO'],
        link: 'https://www.hometurftherapy.com/'
    }

    const protec = {
        company: '-- Protec',
        title: '',
        description: 'Implement changes to the ERP system to improve workflow and make their product ordering processes quicker and more efficient. This involves the full stack both modifying the database through their api, or modifying the front end.',
        startMonth: 'Jul 2023',
        startYear: '',
        endMonth: 'Current',
        endYear: '',
        skills: ['Vue.js', 'Javascript', 'CSS', 'HTML', 'php', 'Laravel'],
        link: 'https://www.protecph.com/'
    }

    return (
        <div className="py-36 w-full font-roboto text-teal-200 flex justify-center items-center">
            <div className="flex flex-col items-center max-w-[1000px]">
                <ResumeCard job={jobs} classes="min-[520px]:w-[70%] md:w-[60%]"/>
                <ResumeCard job={selfEmployment} classes="min-[520px]:w-[70%] md:w-[60%]">
                    <ResumeCard job={homeStretchTherapy} />
                    <ResumeCard job={protec} />
                </ResumeCard>
            </div>
        </div>
    )
}

export default ResumePage;