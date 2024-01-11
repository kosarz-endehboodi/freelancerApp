
import { useState } from "react"
import TextField from "../../UI/TextField"
import { useForm } from "react-hook-form";
import RHFSelect from "../../UI/RHFSEelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../UI/DatePickerField";
import useCategories from "../../hooks/useCategories"
import useCrateProject from "./useCreateProject";
import Loading from "../../UI/Loading"
import useEditProject from "./useEditProject";



export default function CreateProjectForm({ onClose, projectToEdit = {} }) {
    //title,desc,category,tags,budget,deadline
    //input :text ==>number
    //category=>select option
    //tags=>,ultiinout
    //deadline--> datepicker
    //title =>8chrcts ,password :8, Aa3546,.. (validation)

    //front-end:neccessary,not efficient=>
    //back-end:good job;



    const { _id: editId } = projectToEdit;
    const isEditSession = Boolean(editId)
    //{title,desc,budget,deadline,category tags}
    const { title,
        description,
        deadline, budget,
        category,
        tags: prevTags } = projectToEdit;
    let editValues = {};
    if (isEditSession) {
        editValues = {
            title,
            description,
            budget,
            category: category._id,

        }
    }


    const [tags, setTag] = useState(prevTags || []);
    const [date, setDate] = useState(new Date(deadline || ""));

    const { isCreating, createProject } = useCrateProject();
    const { editProject, isEditing } = useEditProject()



    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({ defaultValues: editValues });

    const { categories } = useCategories()
    //create new  project handler
    const onSubmit = (data) => {
        const newProject = {
            ...data,
            deadline: new Date(date).toISOString()
            , tags
        };
        if (isEditSession) {
            editProject({ id: editId, newProject }, {
                onSuccess: () => {
                    onClose(),
                        reset();
                }
            })
        }
        else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose(),
                        reset();
                }
            });
        }

    };

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
                    name="description"
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
                    name="budget"
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

                <div className="!mt-8">
                    {isCreating || isEditing ? <Loading /> :
                        <button
                            type="submit"
                            className="btn btn--primary w-full"
                        >تایید
                        </button>
                    }
                </div>

            </form >
        </div >
    )
}