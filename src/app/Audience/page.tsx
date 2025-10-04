'use client'
import { useState } from "react";
import { useDataContext } from "../Contexts/DataContext";
import NavButton from "../Components/NavButton";
import { useRouter } from "next/navigation";

export default function Audience() {
    const { data, setData } = useDataContext();

    const router = useRouter()

    const [targetAudience, setTargetAudience] = useState<string>();

    const goBack = () => {
        // go back to select style page
        router.back();
    }

    return (
        <div className="w-1/2">
            <div className="w-full text-center text-2xl font-medium">Who are you writing to?</div>

            <div className="w-full text-center">
                <label htmlFor="audience-select" className="mr-4">Choose a target audience:</label>
                    <select 
                        name="audience-select" 
                        id="audience-select" 
                        className="mt-[14px] py-[10px] px-[30px] rounded-lg bg-white"
                        value={targetAudience}
                        onChange={(event) => setTargetAudience(event.target.value)}
                    >
                        <option value="recruiters">recruiters</option>
                        <option value="industry-peers">industry peers</option>
                        <option value="potential-clients">potential clients</option>
                        <option value="general-network">general network</option>
                    </select>
            </div>

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack}/>
                <NavButton buttonText="next" onClickHandler={goBack}/>
            </div>
        </div>
    )
}

