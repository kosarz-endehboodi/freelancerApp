import Filter from "../../../UI/Filter";
import FilterDropDown from "../../../UI/FilterDropDown"
import useCategories from "../../../hooks/useCategories"


const sortOptions = [
    {
        label: "مرتب سازی (جدید ترین)",
        value: "latest"
    },
    {
        label: "مرتب سازی (قدیمی ترین)",
        value: "earliest"
    },
]


const statusOptions = [

    {
        label: "همه",
        value: "ALL",
    },
    {
        label: "باز",
        value: "OPEN",
    },
    {
        label: "بسته",
        value: "CLOSED",
    },

]

export default function ProjectHeader() {
    const { transformedCategories } = useCategories();
    return (
        <div className="flex items-center justify-between text-secondary-700 mb-8">
            <h1>لیست پروژه ها</h1>
            <div className="flex gap-x-8 items-center">
                <Filter filterField="status" options={statusOptions} />
                <FilterDropDown
                    filterField="category"
                    options={[
                        {
                            value: "ALL",
                            label: "دسته بندی (همه)",
                        },
                        ...transformedCategories,
                    ]} />
                <FilterDropDown
                    filterField="sort" options={sortOptions} />
            </div>
        </div>
    )
}