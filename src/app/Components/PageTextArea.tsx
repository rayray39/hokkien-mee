
export default function PageTextArea({
    title,
    placeholder,
    textareaContent,
    onChangeTextareaContent
}:{
    title:string,
    placeholder:string,
    textareaContent:string,
    onChangeTextareaContent:React.ChangeEventHandler<HTMLTextAreaElement>
}) {
    return (
        // displays a generic textarea component

        // title: the title for the page, indicates what this page is for
        // placeholder: the placeholder text inside the textarea, indicates what the textarea is for
        // textareaContent: the text that is written by the user inside the textarea
        // onChangeTextareaContent: the onChange event handler, which updates the text written by the user

        <div>
            <div className="w-full text-center text-2xl font-medium">{title}</div>

            <textarea
                name="textarea-content"
                id="textarea-content"
                rows={3}
                placeholder={placeholder}
                className="w-full p-[8px] bg-white rounded-lg resize-none mt-[14px]"
                value={textareaContent}
                onChange={onChangeTextareaContent}
            ></textarea>
        </div>
    )
}