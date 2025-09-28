'use client'
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";
import { useEffect, useState } from "react";
import { useDataContext } from "../Contexts/DataContext";

export default function SelectStyle() {
    const { data, setData } = useDataContext();

    const router = useRouter();
    const [selectedStyle, setSelectedStyle] = useState<string>(data?.style ?? 'professional');  // if data.style is null | undefined, set to 'professional'

    useEffect(() => {
        if (data?.style) {
            setSelectedStyle(data.style);
        }
    }, [data?.style])

    const goToNextPage = () => {
        // go to next page
        logSelectedStyle();
        setData({ summary: data?.summary ?? "", style: selectedStyle })
    }

    const goBack = () => {
        // go back to main content page
        router.back();
    }

    const logSelectedStyle = () => {
        console.log(`main content: ${data?.summary}`)
        console.log(`selected style: ${selectedStyle}`);
    }

    return (
        <div className="w-1/2">
            <div className="w-full text-center text-2xl font-medium">Select a style for your post</div>

            <div className="w-full text-center">
                <label htmlFor="style-select" className="mr-4">Choose a style:</label>
                <select 
                    name="style-select" 
                    id="style-select" 
                    className="mt-[14px] py-[10px] px-[30px] rounded-lg bg-white"
                    value={selectedStyle}
                    onChange={(event) => setSelectedStyle(event.target.value)}
                >
                    <option value="professional">professional</option>
                    <option value="achievement">achievement</option>
                    <option value="storytelling">storytelling</option>
                    <option value="funny">funny</option>
                </select>
            </div>

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack} />
                <NavButton buttonText="next" onClickHandler={goToNextPage} />
            </div>
        </div>
    );
}
