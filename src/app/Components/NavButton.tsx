
function NavButton({ buttonText, onClickHandler }:{ buttonText: string, onClickHandler:() => void }) {
    return <>
        <button className="
            bg-[#19183B]
            text-[#E7F2EF]
            py-[10px]
            px-[40px]
            rounded-lg
            cursor-default
            mt-[14px]
        "
        id="custom-nav-button"
        onClick={onClickHandler}>{buttonText}</button>
    </>
}

export default NavButton