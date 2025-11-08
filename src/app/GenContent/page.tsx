'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";
import { useDataContext } from "../Contexts/DataContext";

export default function GenContent() {
    // const searchParams = useSearchParams();
    // const text:string = searchParams.get('text') ?? "";     // retrieve the 'text' param (llm generated output)

    const [genContent, setGenContent] = useState<string>("");

    useEffect(() => {
        const retrievedGenContent = sessionStorage.getItem('generatedContent');
        if (retrievedGenContent) {
            setGenContent(retrievedGenContent);
        }
    }, [])

    const router = useRouter();
    const { clearExistingData} = useDataContext();

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
            }, 2000);
            console.log('successfully copied to clipboard');
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    }

    const goBackToHomePage = () => {
        console.log('going back to home page');
        // clear the existing data
        clearExistingData();
        router.push("/")
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

            <div className="flex justify-center space-x-8">
                <button onClick={copyGenContent} className={copied ? copiedButtonStyle : originalButtonStyle}>
                    {copied ? "copied" : "copy"}
                </button>
                <NavButton buttonText="back to home" onClickHandler={goBackToHomePage}/>
            </div>
        </div>
    )
}