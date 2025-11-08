import NavButton from "./NavButton";

interface CustomDialogProps {
    title:string,
    body:string,
    isOpen:boolean,
    closeDialog:() => void
}

export default function CustomDialog({
    title,
    body,
    isOpen,
    closeDialog
}:CustomDialogProps) {
    if (!isOpen) {
        return null
    } else {
        return <div className="fixed inset-0 flex justify-center items-center bg-black/10 z-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center
                            p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6
                            w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</div>

                <div>{body}</div>

                <div className="text-center">
                    <NavButton buttonText="close" onClickHandler={closeDialog} />
                </div>
            </div>
        </div>
    }
}