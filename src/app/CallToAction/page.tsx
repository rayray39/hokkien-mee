'use client'
import { useState } from "react"
import NavButton from "../Components/NavButton";
import { useRouter } from "next/navigation";

export default function CallToAction() {
    const router = useRouter();

    const [callToAction, setCallToAction] = useState<string>('');

    const goBack = () => {
        // go back to select target audience page
        router.back();
    }

    const finish = () => {
        console.log('heading to finish page.');
    }

    return (
        <div className="w-1/2">
            <div className="w-full text-center text-2xl font-medium">What is the call to action?</div>

            <div>
                <textarea
                    name="call-to-action"
                    id="call-to-action"
                    placeholder="Call to action"
                    className="w-full p-[8px] bg-white rounded-lg resize-none mt-[14px]"
                    rows={3}
                    value={callToAction}
                    onChange={(event) => setCallToAction(event.target.value)}
                ></textarea>
            </div>

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack}/>
                <NavButton buttonText="finish" onClickHandler={finish}/>
            </div>
        </div>
    )
}