'use client'
import { useRouter } from "next/navigation";
import NavButton from "../Components/NavButton";

export default function SelectStyle() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <div className="w-1/2">
            <div className="w-full text-center">This is the select style page!</div>

            <div className="w-full text-center">
                <label htmlFor="style-select" className="mr-4">Choose a style:</label>
                <select name="style-select" id="style-select" className="mt-[14px] py-[10px] px-[30px] rounded-lg bg-white">
                    <option value="professional">professional</option>
                    <option value="achievement">achievement</option>
                    <option value="storytelling">storytelling</option>
                    <option value="funny">funny</option>
                </select>
            </div>

            <div>
                <NavButton buttonText="back" onClickHandler={goBack} />
            </div>
        </div>
    );
}
