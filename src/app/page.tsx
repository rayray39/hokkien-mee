'use client'
import { useRouter } from "next/navigation";
import NavButton from "./Components/NavButton";
import CustomDialog from "./Components/CustomDialog";
import { useState } from "react";

export default function Home() {
    const router = useRouter();

    const [openAboutDialog, setOpenAboutDialog] = useState<boolean>(false);

    const aboutDialogBody:string = `
        Generate a curated LinkedIn post with just a few clicks, powered by meta's llama-3.3-8b model
    `

    const openAbout = () => {
        // open the about dialog (modal)
        console.log('opening about dialog.');
        setOpenAboutDialog(true);
    }

    const closeAbout = () => {
        // close the aboud dialog (modal)
        console.log('closing about dialog.');
        setOpenAboutDialog(false);
    }

    const goMainContentPage = () => {
        // go to the main content (summary page)
        router.push('/MainContent')
    }

    return (
        <div>
            <div className="text-center text-4xl font-semibold">HokkienMee🍜</div>

            <div className="flex justify-center items-center space-x-8">
                <NavButton buttonText="start" onClickHandler={goMainContentPage} />
                <NavButton buttonText="about" onClickHandler={openAbout} />
            </div>

            <CustomDialog title="About HokkienMee" body={aboutDialogBody} isOpen={openAboutDialog} closeDialog={closeAbout}/>
        </div>
    );
}
