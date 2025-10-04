
export default function PageSelector({
    title,
    label,
    optionsList,
    selectedItem,
    onChangeSelectedItem
}:{
    title:string,
    label:string,
    optionsList:string[],
    selectedItem:string,
    onChangeSelectedItem:React.ChangeEventHandler<HTMLSelectElement>
}) {
    return (
        <div>
            <div className="w-full text-center text-2xl font-medium">{title}</div>

            <div className="w-full text-center">
                <label htmlFor="style-select" className="mr-4">{`${label}:`}</label>
                <select 
                    name="style-select" 
                    id="style-select" 
                    className="mt-[14px] py-[10px] px-[30px] rounded-lg bg-white"
                    value={selectedItem}
                    onChange={onChangeSelectedItem}
                >
                    {
                        optionsList.map((optionItem, index) => (
                            <option key={index} value={optionItem}>
                                {optionItem}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}