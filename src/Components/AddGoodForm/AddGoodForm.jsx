import React, {useState} from 'react';
import './AddGoodForm.sass'
import Button from "../UI/Button/Button";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import Input from "../UI/Input/Input";


const AddGoodForm = props => {
    const [focusElement, focusElementHandler] = useState(null);
    const [getProductValue] = useState({});

    // specify upload params and url for your files
    const getUploadParams = ({meta}) => {
        return {url: 'https://httpbin.org/post'}
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({meta, file}, status) => {
        console.log(status, meta, file)
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    const addProductValue = e => {
        e.preventDefault();
        getProductValue[e.target.name] = e.target.value;
        console.log(getProductValue)
    };
    const addGoodFromTableHandler = () => {
        let newChatId = getProductValue
        console.log(newChatId)
        let currentGoods = props.data?.showGoods ? props.data.showGoods : []
        currentGoods.push(newChatId)
        props.DBSetter('/showGoods', currentGoods)
    }
    const submitAddGoodFormHandler = e => {
        e.preventDefault();
        addGoodFromTableHandler()
        e.target.reset();
    }

    return (
        <form
            className={'AddGoodForm'}
            onSubmit={(e) => submitAddGoodFormHandler(e)}
        >
            <legend className={'NavigationTopic'}>Add Good</legend>
            <label className={'AddGoodFormLabel'}>
                Name
                <Input
                    name={'Name'}
                    // className={focusElement === 'Name' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}
                    type={'text'}
                    placeholder={'Name of good'}
                    onFocus={(value) => focusElementHandler(value)}
                    onBlur={(value) => focusElementHandler(value)}
                    onChange={e => addProductValue(e)}
                    />
            </label>

            <label className={'AddGoodFormLabel'}>
                Category
                <Input
                    name={'Category'}
                    className={focusElement === 'Category' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}
                    type={'text'}
                    placeholder={'Category'}
                    onFocus={(value) => focusElementHandler(value)}
                    onBlur={(value) => focusElementHandler(value)}
                    onChange={e => addProductValue(e)}
                    />
            </label>

            <label className={'AddGoodFormLabel'}>
                Price
                <Input
                    name={'Price'}
                    className={focusElement === 'Price' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}
                    type={'text'}
                    placeholder={'Price'}
                    onFocus={(value) => focusElementHandler(value)}
                    onBlur={(value) => focusElementHandler(value)}
                    onChange={e => addProductValue(e)}
                    />
            </label>

            <textarea
                className={'descriptionInput'}
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder={'Description'}
                onChange={e => addProductValue(e)}
            >

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