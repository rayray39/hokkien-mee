'use client'
import { useState, useEffect } from "react"
import NavButton from "../Components/NavButton";
import { useRouter } from "next/navigation";
import PageTextArea from "../Components/PageTextArea";
import { useDataContext } from "../Contexts/DataContext";

export default function CallToAction() {
    // the call to action that the user wants to have on readers

    const router = useRouter();

    const { data, setData } = useDataContext();

    const [callToAction, setCallToAction] = useState<string>('');

    const [isCallToActionEmpty, setIsCallToActionEmpty] = useState<boolean>(false);

    useEffect(() => {
        if (data?.callToAction) {
            setCallToAction(data.callToAction);
        }
    }, [data?.callToAction])

    const goBack = () => {
        // go back to select target audience page
        router.back();
    }

    const logCallToAction = () => {
        if (callToAction === "") {
            console.log('call to action is empty');
            setIsCallToActionEmpty(true);
        } else {
            console.log(`call to action: ${callToAction}`);
            setIsCallToActionEmpty(false);
        }
    }

    const finish = () => {
        logCallToAction();
        if (callToAction === "") {
            setIsCallToActionEmpty(true);
            return;
        }
        if (callToAction.length >= 300) {
            return;
        }

        console.log('heading to finish page.');
        setData({
            summary: data?.summary ?? "",
            style: data?.style ?? "",
            audience: data?.audience ?? "",
            callToAction: callToAction
        })
        router.push('/Finish')
    }

    return (
        <div className="w-1/2">
            <PageTextArea 
                title="What is the call to action?🤷‍♀️"
                placeholder="Call to action..."
                textareaContent={callToAction}
                onChangeTextareaContent={(event) => setCallToAction(event.target.value)}
            />

            {
                isCallToActionEmpty && <div className="text-center text-red-600">
                    *call to action cannot be empty!
                </div>
            }

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack}/>
                <NavButton buttonText="finish" onClickHandler={finish}/>
            </div>
        </div>
    )
}