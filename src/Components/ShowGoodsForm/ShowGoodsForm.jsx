import React from 'react';
import './ShowGoodsForm.sass'

const ShowGoodsForm = () => {
    return (
        <div className={'ShowGoodsForm'}>
            <div className="showGoodsTable">
                <div className="showGoodsTableHeader">
                    <div>Image</div>
                    <div>Name</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Description</div>
                    <div>EDIT</div>
                    <div>DELETE</div>
                </div>
                <div className="showGoodsTableBody">
                    <div>
                        <img src="" alt="image will be here"/>
                    </div>
                    <div>product  name</div>
                    <div>product Category</div>
                    <div>product Price</div>
                    <div>product Description kasbfa bkjgdab gda gkdj bgkds jbg dksg bdksg bds</div>
                    <div>EDIT</div>
                    <div>DELETE</div>
                </div>
            </div>
        </div>
    );
};

export default ShowGoodsForm;