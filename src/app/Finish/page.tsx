'use client'
import NavButton from "../Components/NavButton";
import SummarySection from "../Components/SummarySection";
import { useDataContext } from "../Contexts/DataContext"

export default function Finish() {
    const { data, setData } = useDataContext();

    const generatePost = async () =>{
        // link this to a serverless function that will call openrouter api
        console.log('generate post');
        const response = await fetch("api/generate", {
            method:'GET'
        })
        const data = await response.json()
        console.log(`data: ${data.message}`)
    }

    return (
        <div className="w-1/2">
            <div className="text-4xl font-semibold text-center">HokkienMee</div>
            <div className="text-2xl font-medium text-center mb-[12px]">summary</div>

            <SummarySection sectionTitle="main content" sectionData={data?.summary}/>
            <SummarySection sectionTitle="selected style" sectionData={data?.style}/>
            <SummarySection sectionTitle="target audience" sectionData={data?.audience}/>
            <SummarySection sectionTitle="call to action" sectionData={data?.callToAction}/>

            <div className="text-center">
                <NavButton buttonText="generate post!" onClickHandler={generatePost}/>
            </div>
        </div>
    )
}