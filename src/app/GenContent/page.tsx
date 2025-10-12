'use client'
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function GenContent() {
    const searchParams = useSearchParams();
    const text:string = searchParams.get('text') ?? "";     // retrieve the 'text' param (llm generated output)

    const [genContent, setGenContent] = useState(text);

    return (
        <div className="w-1/2">
            <div className="w-full text-center text-2xl font-medium">Generated Post</div>

            <textarea
                name="textarea-content"
                id="textarea-content"
                rows={12}
                className="w-full p-[8px] bg-white rounded-lg resize-none mt-[14px]"
                value={genContent}
                onChange={(event) => setGenContent(event.target.value)}
            ></textarea>

            <div className="text-center">
                <button className="
                    bg-[#19183B]
                    text-[#E7F2EF]
                    py-[10px]
                    px-[40px]
                    rounded-lg
                    cursor-default
                    mt-[18px]
                ">copy</button>
            </div>
        </div>
    )
}