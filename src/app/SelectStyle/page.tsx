'use client'
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";
import { useEffect, useState } from "react";
import { useDataContext } from "../Contexts/DataContext";
import PageSelector from "../Components/PageSelector";

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
            audience: data?.audience ?? "",
            callToAction: data?.callToAction ?? ""
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
            <PageSelector
                title="How should your post feel?🌇"
                label="Choose a style"
                optionsList={['professional', 'inspirational', 'storytelling', 'marketing', 'humorous']}
                selectedItem={selectedStyle}
                onChangeSelectedItem={(event) => setSelectedStyle(event.target.value)}
            />

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack} />
                <NavButton buttonText="next" onClickHandler={goTargetAudiencePage} />
            </div>
        </div>
    );
}
