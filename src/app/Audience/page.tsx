'use client'
import { useState, useEffect } from "react";
import { useDataContext } from "../Contexts/DataContext";
import NavButton from "../Components/NavButton";
import { useRouter } from "next/navigation";
import PageSelector from "../Components/PageSelector";

export default function Audience() {
    // the target audience that the post is trying to appeal to

    const { data, setData } = useDataContext();
    const router = useRouter()

    const [targetAudience, setTargetAudience] = useState<string>(data?.audience ?? "recruiters");

    useEffect(() => {
        if (data?.audience) {
            setTargetAudience(data.audience);
        } else {
            setTargetAudience('recruiters');
        }
    }, [data?.audience])

    const goToNextPage = () => {
        // go to the next page
        logTargetAudience();
        setData({
            summary: data?.summary ?? "",
            style: data?.style ?? "",
            audience: targetAudience ?? "",
            callToAction: data?.callToAction ?? ""
        })
        router.push('/CallToAction');
    }

    const goBack = () => {
        // go back to select style page
        router.back();
    }

    const logTargetAudience = () => {
        console.log(`selected target audience: ${targetAudience}`);
    }

    return (
        <div className="w-1/2">
            <PageSelector
                title="Who are you writing to?👨‍👩‍👧‍👦"
                label="Choose a target audience"
                optionsList={['recruiters', 'industry peers', 'potential clients', 'general network']}
                selectedItem={targetAudience}
                onChangeSelectedItem={(event) => setTargetAudience(event.target.value)}
            />

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack}/>
                <NavButton buttonText="next" onClickHandler={goToNextPage}/>
            </div>
        </div>
    )
}

