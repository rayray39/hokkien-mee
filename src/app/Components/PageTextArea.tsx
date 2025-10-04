
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