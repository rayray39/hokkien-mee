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
            <div>This is the home page</div>

            <NavButton buttonText="next" onClickHandler={goMainContentPage} />
        </div>
    );
}
