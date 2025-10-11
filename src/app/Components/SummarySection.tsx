
export default function SummarySection({sectionTitle, sectionData}:{sectionTitle:string, sectionData:string | undefined}) {
    return (
        <section className="border px-[12px] py-[6px] rounded-lg mb-[12px] border-gray-300">
            <div className="text-xl">{sectionTitle}</div>
            <div className="text-base">{sectionData}</div>
        </section>
    )
}