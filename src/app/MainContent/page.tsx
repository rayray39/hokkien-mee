'use client'
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";
import { useEffect, useState } from "react";
import { useDataContext } from "../Contexts/DataContext";
import PageTextArea from "../Components/PageTextArea";

export default function MainContent() {
    // summary of the main content the user wants to post about

    const { data, setData } = useDataContext();     // global data (summary, style) for persistence

    const router = useRouter();
    const [mainContent, setMainContent] = useState<string>('');     // user provided summary of content
    const [isMainContentEmpty, setIsMainContentEmpty] = useState<boolean>(false);

    useEffect(() => {
        if (data?.summary) {
            setMainContent(data.summary);
        }
    }, [data?.summary])

    const goSelectStylePage = () => {
        // next page (select style of content)
        logMainContent();
        if (mainContent === "") {
            // if no main content (summary of post)
            return;
        }
        setData({
            summary: mainContent,
            style: data?.style ?? "",
            audience: data?.audience ?? "",
            callToAction: data?.callToAction ?? ""
        });
        router.push('/SelectStyle');
    }

    const goBack = () => {
        // go back to home page
        router.back();
    }

    const logMainContent = () => {
        if (mainContent === "") {
            console.log('main content is empty.');
            setIsMainContentEmpty(true);
        } else {
            console.log(`main content: ${mainContent}.`);
            setIsMainContentEmpty(false);
        }
    }

    return (
        <div className="w-1/2">
            <PageTextArea 
                title="Provide a summary of your post"
                placeholder="What do you want to post..."
                textareaContent={mainContent}
                onChangeTextareaContent={(event) => setMainContent(event.target.value)}
            />

            {
                isMainContentEmpty && <div className="text-center text-red-600">
                    *summary of your post cannot be empty!
                </div>
            }

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack} />
                <NavButton buttonText="next" onClickHandler={goSelectStylePage} />
            </div>
        </div>
    );
}
