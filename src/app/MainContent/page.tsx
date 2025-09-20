'use client'
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";

export default function MainContent() {
    const router = useRouter();

    const goSelectStylePage = () => {
        router.push('/SelectStyle');
    }

    const goBack = () => {
        router.back();
    }

    return (
        <div className="w-1/2">
            <div className="w-full text-center">This is the main content page!</div>

            <textarea
                name="main-content"
                id="main-content"
                rows={3}
                placeholder="What do you want to post..."
                className="w-full p-[8px] bg-white rounded-lg resize-none"
            ></textarea>

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack} />
                <NavButton buttonText="next" onClickHandler={goSelectStylePage} />
            </div>
        </div>
    );
}
