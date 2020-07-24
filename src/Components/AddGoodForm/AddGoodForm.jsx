import React, {useState} from 'react';
import './AddGoodForm.sass'
import Button from "../UI/Button/Button";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import Input from "../UI/Input/Input";


const AddGoodForm = () => {
    const [focusElement, focusElementHandler] = useState(null);
    const dataInputs = [
        {
            name: 'Name',
            className: `${focusElement === 'Name' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}`, // Якшо в фокусі login то дай йому стилі AddGoodFormInput та changeColorPlaceholder або якщо не в фокусі дай йому стиль AddGoodFormInput
            type: 'text',
            placeholder: 'Name of good',
        },
        {
            name: 'Category',   // При події onClick поміняй значення showPassword
            className: `${focusElement === 'Category' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}`,
            type: 'text',
            placeholder: 'Category',
        },
        {
            name: 'Price',   // При події onClick поміняй значення showPassword
            className: `${focusElement === 'Price' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}`,
            type: 'text',
            placeholder: 'Price',
        }
    ];

    const [changeElement, changeElementHandler] = useState({})
    const getInputsData = (value, label) => {
        changeElement[label] = value.target.value
    };

    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
            <form className={'AddGoodForm'}>
                <legend className={'NavigationTopic'}>Add Good</legend>
                {
                    dataInputs.map((input, index) => {
                        return (
                            <label className={`AddGoodFormLabel`}>
                                {input.name}
                            <Input
                                name={input.name}
                                className={input.className}
                                key={index}
                                type={input.type}
                                placeholder={input.placeholder}
                                onFocus={(value) => focusElementHandler(value)}
                                onBlur={(value) => focusElementHandler(value)}
                            />
                            </label>
                        )
                    })
                }
                <textarea className={'descriptionInput'} name="" id="" cols="30" rows="10" placeholder={'Description'}>

                </textarea>
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    accept="image/*,audio/*,video/*"
                />
                <Button
                    className={'defaultBtn'}
                    type={'submit'}
                    value={'Submit'}
                />
            </form>
    );
};

export default AddGoodForm;