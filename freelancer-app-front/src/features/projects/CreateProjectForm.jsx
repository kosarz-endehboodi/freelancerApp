
import { useState } from "react"
import TextField from "../../UI/TextField"
import { useForm } from "react-hook-form";
import RHFSelect from "../../UI/RHFSEelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../UI/DatePickerField";
import useCategories from "../../hooks/useCategories"
export default function CreateProjectForm() {
    //title,desc,category,tags,budget,deadline
    //input :text ==>number
    //category=>select option
    //tags=>,ultiinout
    //deadline--> datepicker
    //title =>8chrcts ,password :8, Aa3546,.. (validation)

    //front-end:neccessary,not efficient=>
    //back-end:good job;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => { };
    const [tags, setTag] = useState([]);
    const [date, setDate] = useState(new Date());
    const{categories}=useCategories()


    return (
        <div>
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="عنوان پروژه"
                    name="title"
                    register={register}
                    required
                    validationSchema={{
                        required: "عنوان ضروری است",
                        minlength: { value: 20, message: "عنوان نامعتبر است" }

                    }}
                    errors={errors}
                />
                <TextField
                    label=" توضیحات"
                    name="title"
                    register={register}
                    required
                    validationSchema={{
                        required: "توضیحات ضروری است",
                        minlength: { value: 15, message: "  حداقل 15 کاراکتر ضروری است" }

                    }}
                    errors={errors}
                />
                <TextField
                    label=" بودجه"
                    name="price"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "بودجه ضروری است",


                    }}
                    errors={errors}
                />
                <RHFSelect
                    name="category"
                    label="دسته بندی"
                    register={register}
                    options={categories}
                    required
                />
                <div>
                    <label className="mb-2 block text-secondary-700">تگ</label>
                    <TagsInput
                        value={tags}
                        onChange={setTag}
                        name="tags"
                    />
                </div>
                <DatePickerField
                    date={date}
                    setDate={setDate}
                    label="ددلاین" />

                <button type="submit" className="btn btn--primary w-full" >تایید</button>
            </form >
        </div >
    )
}