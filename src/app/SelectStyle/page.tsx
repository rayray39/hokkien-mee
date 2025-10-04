'use client'
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";
import { useEffect, useState } from "react";
import { useDataContext } from "../Contexts/DataContext";

export default function SelectStyle() {
    // the style of the post that the user wants to post about

    const { data, setData } = useDataContext();     // global data (summary, style) for persistence

    const router = useRouter();
    const [selectedStyle, setSelectedStyle] = useState<string>(data?.style ?? 'professional');  // if data.style is null | undefined, set to 'professional'

    useEffect(() => {
        if (data?.style) {
            setSelectedStyle(data.style);
        }
    }, [data?.style])

    const goTargetAudiencePage = () => {
        // go to next page (select target audience)
        logSelectedStyle();
        setData({
            summary: data?.summary ?? "",
            style: selectedStyle,
            audience: data?.audience ?? ""
        });
        router.push('/Audience');
    }

    const goBack = () => {
        // go back to main content page
        router.back();
    }

    const logSelectedStyle = () => {
        console.log(`selected style: ${selectedStyle}`);
    }

    return (
        <div className="w-1/2">
            <div className="w-full text-center text-2xl font-medium">How should your post feel?</div>

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
                    <option value="achievement">inspirational</option>
                    <option value="storytelling">storytelling</option>
                    <option value="marketing">marketing</option>
                    <option value="humorous">humorous</option>
                </select>
            </div>

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack} />
                <NavButton buttonText="next" onClickHandler={goTargetAudiencePage} />
            </div>
        </div>
    );
}
