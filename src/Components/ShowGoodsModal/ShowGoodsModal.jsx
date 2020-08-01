import React from 'react';
import './ShowGoodsModal.sass'
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
// import Dropzone from "react-dropzone-uploader/dist/Dropzone";

const ShowGoodsModal = props => {
    return (
        <div key={props.key} className={'ShowGoodsModal'}>
            <Input
                type="file"
                name='productImage'
                className={'defaultInput SHFInput'}
            />
            <Input
                type="text"
                placeholder={props.e.Name}
                name="productName"
                className={'defaultInput SHFinput'}
                // onChange={ e => editProductName(e)}
            />
            <Input
                name={'productCategory'}
                type="text"
                placeholder={props.e.Category}
                className={'defaultInput SHFinput'}
                // onChange={ e => editProductCategory(e)}
            />
            <Input
                type="text"
                placeholder={props.e.Price}
                name={'productPrice'}
                className={'defaultInput SHFinput'}
                // onChange={ e => editProductPrice(e)}
            />
            <Input
                type="text"
                placeholder={props.e.description}
                name={'productDescription'}
                // onChange={ e => editProductDescription(e)}
            />
            <Button
                onClick={() => props.isSHGModalOpenHandler({status:false,item : null})}
                value={'Close Modal'}
                className={'defaultBtn'}
            />
        {/*    <form*/}
        {/*        className={'AddGoodForm'}*/}
        {/*        onSubmit={(e) => submitAddGoodFormHandler(e)}*/}
        {/*    >*/}
        {/*        <legend className={'NavigationTopic'}>Add Good</legend>*/}
        {/*        <label className={'AddGoodFormLabel'}>*/}
        {/*            Name*/}
        {/*            <Input*/}
        {/*                name={'Name'}*/}
        {/*                // className={focusElement === 'Name' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}*/}
        {/*                type={'text'}*/}
        {/*                placeholder={props.e.Name}*/}
        {/*                onFocus={(value) => focusElementHandler(value)}*/}
        {/*                onBlur={(value) => focusElementHandler(value)}*/}
        {/*                onChange={e => addProductValue(e)}*/}
        {/*            />*/}
        {/*        </label>*/}

        {/*        <label className={'AddGoodFormLabel'}>*/}
        {/*            Category*/}
        {/*            <Input*/}
        {/*                name={'Category'}*/}
        {/*                className={focusElement === 'Category' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}*/}
        {/*                type={'text'}*/}
        {/*                placeholder={props.e.Category}*/}
        {/*                onFocus={(value) => focusElementHandler(value)}*/}
        {/*                onBlur={(value) => focusElementHandler(value)}*/}
        {/*                onChange={e => addProductValue(e)}*/}
        {/*            />*/}
        {/*        </label>*/}

        {/*        <label className={'AddGoodFormLabel'}>*/}
        {/*            Price*/}
        {/*            <Input*/}
        {/*                name={'Price'}*/}
        {/*                className={focusElement === 'Price' ? 'defaultInput changeColorPlaceholder' : 'defaultInput'}*/}
        {/*                type={'text'}*/}
        {/*                placeholder={'Price'}*/}
        {/*                onFocus={(value) => focusElementHandler(value)}*/}
        {/*                onBlur={(value) => focusElementHandler(value)}*/}
        {/*                onChange={e => addProductValue(e)}*/}
        {/*            />*/}
        {/*        </label>*/}

        {/*        <textarea*/}
        {/*            className={'descriptionInput'}*/}
        {/*            name="description"*/}
        {/*            id=""*/}
        {/*            cols="30"*/}
        {/*            rows="10"*/}
        {/*            placeholder={'Description'}*/}
        {/*            onChange={e => addProductValue(e)}*/}
        {/*        >*/}

        {/*        </textarea>*/}
        {/*        <Dropzone*/}
        {/*            getUploadParams={getUploadParams}*/}
        {/*            onChangeStatus={handleChangeStatus}*/}
        {/*            accept="image/*,audio/*,video/*"*/}
        {/*        />*/}
        {/*        <Button*/}
        {/*            className={'defaultBtn'}*/}
        {/*            type={'submit'}*/}
        {/*            value={'Submit'}*/}
        {/*        />*/}
        {/*    </form>*/}
        </div>

    );
};

export default ShowGoodsModal;