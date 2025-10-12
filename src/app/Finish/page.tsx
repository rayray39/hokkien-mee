'use client'
import { useState } from "react";
import NavButton from "../Components/NavButton";
import SummarySection from "../Components/SummarySection";
import { useDataContext } from "../Contexts/DataContext"

export default function Finish() {
    const { data, setData } = useDataContext();
    const [generatedContent, setGeneratedContent] = useState<string>('');

    const prompt:string = `
        You are an expert LinkedIn content creator. Your goal is to craft an engaging LinkedIn post based on the parameters.

        Write a LinkedIn post that:
        - Reflects the summary content provided.
        - Adopts the specified writing style.
        - Resonates with the defined target audience.
        - Ends with the suggested call to action.
        - Sounds natural and authentic for a LinkedIn audience.
        - Keep it concise and well formatted.

        Parameters:
        - Summary: ${data?.summary}
        - Style: ${data?.style}
        - Target Audience: ${data?.audience}
        - Call to Action: ${data?.callToAction}

        Output:
        A complete LinkedIn post (3–5 short paragraphs, human-like tone, ready to post).
    ` 

    const generatePost = async () =>{
        console.log('generate post');
        const response = await fetch("api/generate", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                prompt: prompt
            })
        })
        const data = await response.json();
        console.log(`message: ${data.message}`);
        console.log(`generated content: ${data.generatedContent}`);
        setGeneratedContent(data.generatedContent);
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