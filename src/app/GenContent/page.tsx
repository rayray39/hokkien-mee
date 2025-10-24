'use client'
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function GenContent() {
    const searchParams = useSearchParams();
    const text:string = searchParams.get('text') ?? "";     // retrieve the 'text' param (llm generated output)

    const [genContent, setGenContent] = useState<string>(text);

    const [copied, setCopied] = useState<boolean>(false);
    const copiedButtonStyle = `
        bg-green-300
        text-black
        py-[10px]
        px-[40px]
        rounded-lg
        cursor-default
        mt-[18px]
    `;  // button style after copied
    const originalButtonStyle = `
        bg-[#19183B]
        text-[#E7F2EF]
        py-[10px]
        px-[40px]
        rounded-lg
        cursor-default
        mt-[18px]
    `;  // button style before copied

    const copyGenContent = async () => {
        console.log('copying to clipboard');
        try {
            await navigator.clipboard.writeText(genContent);
            setCopied(true);

            setTimeout(() => {
                // reset the copied state after 3s
                setCopied(false)
            }, 3000);
            console.log('successfully copied to clipboard');
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    }

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
                <button onClick={copyGenContent} className={copied ? copiedButtonStyle : originalButtonStyle}>
                    {copied ? "copied" : "copy"}
                </button>
            </div>
        </div>
    )
}