import React, {useState} from "react";
import './ShowGoodsForm.sass'
import ShowGoodsTable from "../ShowGoodsTable/ShowGoodsTable";
import ShowGoodsModal from "../ShowGoodsModal/ShowGoodsModal";

const ShowGoodsForm = props => {
    const [isSHGModalOpen, isSHGModalOpenHandler] = useState({status:false,item : null});


    const ShowGoodsTableHeaderArray = [
        {
            nameImage: 'Image',
            name: 'Name',
            nameCategory: 'Category',
            Price: 'Price',
            Description: 'Description',
            Ed: 'Ed',
            Del: 'Del',
        }
    ];
    const clickDeleteShowGoodsButton = e => {
        let newDataShowGoods = []
        // eslint-disable-next-line array-callback-return
        props.data.showGoods.map( ShGoods => {
            if (
                (ShGoods.Name !== e.Name)
                // && (ShGoods.Category !== element.Category) && (ShGoods.Price !== element.Price) && (ShGoods.description !== element.description)
            ) {
                newDataShowGoods.push(ShGoods)
                console.log(e.Name)
            }
        });
        props.DBSetter('/showGoods', newDataShowGoods)
    };

    return (
        <div className={'ShowGoodsForm'}>
            <legend className={'NavigationTopic'}>Show goods form</legend>
            <div className="showGoodsTable">
                {
                    ShowGoodsTableHeaderArray.map((t_header, key) => {
                            return (
                                <div key={key} className="showGoodsTableHeader">
                                    <div className={'headerDiv'}>{t_header.nameImage}</div>
                                    <div className={'headerDiv'}>{t_header.name}</div>
                                    <div className={'headerDiv'}>{t_header.nameCategory}</div>
                                    <div className={'headerDiv'}>{t_header.Price}</div>
                                    <div className={'headerDiv'}>{t_header.Description}</div>
                                    <div className={'headerItemDiv'}>{t_header.Ed}</div>
                                    <div className={'headerItemDiv'}>{t_header.Del}</div>
                                </div>
                            )
                        }
                    )
                }
                {
                    props?.data
                        ?
                        props.data.showGoods.map((e) => {
                            return (
                            <ShowGoodsTable
                                key={e.key}
                                e={e}
                                clickDeleteShowGoodsButton={(el) => clickDeleteShowGoodsButton(el)}
                                isSHGModalOpen={isSHGModalOpen}
                                isSHGModalOpenHandler={(value => isSHGModalOpenHandler(value))}
                            />
                            )
                        }) : null
                }
                {
                    isSHGModalOpen.status ? <div
                        className={isSHGModalOpen.status ? 'opacityAll opacityAllActive' : 'opacityAll'}
                    >

                        <ShowGoodsModal
                            e={isSHGModalOpen.item}
                            data={props.data}
                            isSHGModalOpen={isSHGModalOpen}
                            isSHGModalOpenHandler={(value => isSHGModalOpenHandler(value))}
                        />

                    </div> : null
                }
            </div>
        </div>
    );
};

export default ShowGoodsForm;