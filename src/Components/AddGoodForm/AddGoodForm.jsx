import React, {useState} from 'react';
import './AddGoodForm.sass'
import Button from "../UI/Button/Button";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import Input from "../UI/Input/Input";
import firebase from "firebase";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


const AddGoodForm = props => {
    const [focusElement, focusElementHandler] = useState(null);
    const [getProductValue] = useState({});

    //
    // // specify upload params and url for your files
    // const getUploadParams = ({meta}) => {
    //     return {url: 'https://httpbin.org/post'}
    // }
    //
    // // called every time a file's `status` changes
    // const handleChangeStatus = ({meta, file}, status) => {
    //     console.log(status, meta, file)
    // }

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
        // handleSubmit()
        e.target.reset();
    }
    // const handleSubmit = files => {
    //     //     const id = Math.random()
    //     //     const data = new FormData()
    //     //     console.log(data)
    //     //     files.map(async (item) => {
    //     //         data.append('file', item.file)
    //     //         data.append('upload_preset', 'grande_pizzeria')
    //     //         const res = await fetch(
    //     //             'https://api.cloudinary.com/v1_1/grande_pizzeria/image/upload',
    //     //             {
    //     //                 method: 'POST',
    //     //                 body: data,
    //     //                 mode:'cors'
    //     //             }
    //     //         );
    //     //         const file = await res.json()
    //     //         let newImage = {
    //     //             id:id,
    //     //             src: file.url,
    //     //             // width: random > 0.5 ? 1 : 0.5,
    //     //             // height: random > 0.5 ? 1 : 0.5,
    //     //             width: 0,
    //     //             height: 0,
    //     //             // storydescription: postText,
    //     //             creator: localStorage.getItem('grandeToken'),
    //     //             // date: formatted_date
    //     //         }
    //     //         let arrPhotos = props.dataPhoto?.dataPhoto ? props.dataPhoto?.dataPhoto : []
    //     //         arrPhotos.unshift(newImage)
    //     //         firebase.database().ref('photos').set(arrPhotos)
    //     //             .then(r => props.dbRefreshHandler(Math.random()));
    //     //     })
    //     //
    //     // }

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
                // getUploadParams={getUploadParams}
                // onChangeStatus={handleChangeStatus}
                accept="image/*,audio/*,video/*"
                // onSubmit={handleSubmit}
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