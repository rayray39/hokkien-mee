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
            <div className="w-full text-center text-2xl font-medium">Provide a summary of your post</div>

            <textarea
                name="main-content"
                id="main-content"
                rows={3}
                placeholder="What do you want to post..."
                className="w-full p-[8px] bg-white rounded-lg resize-none mt-[14px]"
            ></textarea>

            <div className="flex justify-center space-x-8">
                <NavButton buttonText="back" onClickHandler={goBack} />
                <NavButton buttonText="next" onClickHandler={goSelectStylePage} />
            </div>
        </div>
    );
}
