import React, {useState} from 'react';
import './AddGoodForm.sass'
import Input from '../UI/Input/Input'
import Button from "../Button/Button";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'


const AddGoodForm = () => {

    const [focusElement, focusElementHandler] = useState(null);
    // const [showPassword, showPasswordHandler] = useState(false);
    //
    const dataInputs = [
        {
            name: 'name',
            className: `${focusElement === 'name' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}`, // Якшо в фокусі login то дай йому стилі defaultInput та changeColorPlaceholder або якщо не в фокусі дай йому стиль defaultInput
            type: 'text',
            placeholder: 'Name of good',
        },
        {
            name: 'category',   // При події onClick поміняй значення showPassword
            className: `${focusElement === 'category' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}`,
            type: 'text',
            placeholder: 'Category',
        },
        {
            name: 'price',   // При події onClick поміняй значення showPassword
            className: `${focusElement === 'price' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}`,
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
        <div className={'addGoodFormContainer'}>
            <form className={'addGoodInputsForm'}>
                <legend className={'NavigationTopic'}>Add Good</legend>
                {
                    dataInputs.map((input, index) => {
                        return (
                            <Input
                                name={input.name}
                                class={input.className}
                                key={index}
                                type={input.type}
                                placeHolder={input.placeholder}
                                onChange={(value, label) => getInputsData(value, label)}
                                onFocus={(value) => focusElementHandler(value)}
                                onBlur={(value) => focusElementHandler(value)}
                            />
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
        </div>
    );
};

export default AddGoodForm;