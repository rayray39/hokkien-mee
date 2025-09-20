'use client'
import { useRouter } from "next/navigation";
import NavButton from "./Components/NavButton";

export default function Home() {
    const router = useRouter();

    const goMainContentPage = () => {
        router.push('/MainContent')
    }

    return (
        <div>
            <div className="text-center text-4xl font-semibold">HokkienMee</div>

            <div className="text-center">
                <NavButton buttonText="start" onClickHandler={goMainContentPage} />
            </div>
        </div>
    );
}
