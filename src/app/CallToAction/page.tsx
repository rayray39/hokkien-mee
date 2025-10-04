'use client'
import { useState } from "react"
import NavButton from "../Components/NavButton";
import { useRouter } from "next/navigation";
import PageTextArea from "../Components/PageTextArea";

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
            <PageTextArea 
                title="What is the call to action?"
                placeholder="Call to action..."
                textareaContent={callToAction}
                onChangeTextareaContent={(event) => setCallToAction(event.target.value)}
            />

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack}/>
                <NavButton buttonText="finish" onClickHandler={finish}/>
            </div>
        </div>
    )
}