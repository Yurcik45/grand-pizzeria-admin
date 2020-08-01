import React,{useState,useEffect} from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import "./ViewPhotos.sass"
import Gallery from 'react-photo-gallery';
import firebase from 'firebase/app';
import "firebase/database"
import '../../firebaseConfig'
import Dropzone from 'react-dropzone-uploader'
import Swiper from 'react-id-swiper';
import Telegram from 'telegram-send-message';

const ViewPhotos = props => {
    const [showAllOptions, showAllOptionsHandler] = useState(false)
    const [openSwiper, openSwiperHandler] = useState(false)
    const [galleryArray, galleryArrayHandler] = useState([])
    const [postText, postTextHandler] = useState(null)
    const [selectedPost, selectedPostHandler] = useState([])


    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => {
        // console.log(status, meta, file)
    }
    const getPostDataHandler = (e) => {
        postTextHandler(e.target.value)
    }
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => {
        // console.log(files.map(f => f.meta))
        // console.log(files)
        const id = Math.random()
        const data = new FormData()
        console.log(files)
        files.map(async (item) => {
            console.log(item)
            data.append('file', item.file)
            data.append('upload_preset', 'sudiary')
            const res = await fetch(
                'https://api.cloudinary.com/v1_1/sudiary/image/upload',
                {
                    method: 'POST',
                    body: data,
                    mode:'cors'
                }
            );

            const file = await res.json()
            let d = new Date();
            let random = Math.random()
            let formatted_date = `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`
            let newImage = {
                id:id,
                src: file.url,
                width: random > 0.5 ? 1 : 0.5,
                height: random > 0.5 ? 1 : 0.5,
                storydescription: postText,
                creator: localStorage.getItem('suToken'),
                date: formatted_date
            }
            let arrPhotos = props.dataPhoto?.dataPhoto ? props.dataPhoto?.dataPhoto : []
            arrPhotos.unshift(newImage)
            firebase.database().ref('photos').set(arrPhotos)
                .then(r => props.dbRefreshHandler(Math.random()));
        })
        Telegram.setToken('1220709957:AAFDC8bjKXZJL5pSnVbl--x54G9ovrY7NMI');
        let chats = ['386477357','438339129']
        chats.map((item) => {
            Telegram.setRecipient(item);
            Telegram.setMessage(`новий пост від ${localStorage.getItem('suToken')}, https://sudiaryv2.web.app/`);
            Telegram.send()
        })
        showAllOptionsHandler(false)
    }

    useEffect(() => {
        if (props.dataPhoto?.dataPhoto) {
            let used = {};
            let arr = props.dataPhoto?.dataPhoto
            galleryArrayHandler(arr.filter((obj) => {
                return obj.id in used ? 0 : (used[obj.id]=1);
            }))
        } else {
            galleryArrayHandler([])
        }
    },[props.dataPhoto])

    const openPostHandler = (e) => {
        openSwiperHandler(true)
        let selected = [];
        // eslint-disable-next-line array-callback-return
        (props.dataPhoto?.dataPhoto).map((item) => {
            if ((item.id).toString() === e.target.id) {
                selected.push(item)
            }
        })
        selectedPostHandler(selected)
    }
    useEffect(() => {
        selectedPostHandler(selectedPost)
    },[selectedPost])
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        }
    }
    return (
        <div>
            {
                showAllOptions
                    ? <div className='dropzoneContainer'>
                        <label htmlFor="">
                            Story description
                            <textarea onChange={(e) => getPostDataHandler(e)}
                                      cols="30" rows="5"/>
                        </label>
                        <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            onSubmit={handleSubmit}
                            accept="image/*,audio/*,video/*"
                        />
                    </div>
                    : null
            }
            {
                openSwiper
                    ? <div className="swipePostContainer">
                        <div className="closeSlider">
                            <button onClick={() => openSwiperHandler(false)}>CLOSE</button>
                        </div>
                        <div className="creatorTop">
                            <p>
                                {selectedPost[0].creator}
                            </p>
                            <p>
                                {selectedPost[0].date}
                            </p>
                        </div>
                        <Swiper {...params}>
                            {
                                selectedPost.map((item,index) => {
                                    console.log(item)
                                    return(
                                        <div className='itemsImageSelected' key={index}>
                                            <div className="selectedImgContainer"
                                                 style={{
                                                     backgroundImage : `url("${item.src}")`,
                                                     backgroundSize: 'cover',
                                                     backgroundPosition: 'center'
                                                 }}
                                            >
                                                {/*<img className='imageSelected' src={item.src} alt=""/>*/}
                                            </div>

                                        </div>
                                    )
                                })

                            }
                        </Swiper>
                        <p className='storyDescription'>{selectedPost[0].storydescription}</p>
                    </div>
                    : null
            }

            {
                props.dataPhoto?.dataPhoto && openSwiper === false
                    ? <Gallery
                        photos={galleryArray}
                        onClick={(e) => openPostHandler(e)}
                    />
                    : null
            }
            <div className="addTaskContainer">
                {
                    showAllOptions
                        ? <div className='optionsContainer'>
                            {/*close*/}
                            <div className="circleContainer" onClick={() => showAllOptionsHandler(false)}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.2021 25.1479L10.4167 13.3625L13.3625 10.4167L25.1479 22.2021L36.9334 10.4167L39.8792 13.3625L28.0938 25.1479L39.8792 36.9333L36.9334 39.8792L25.1479 28.0937L13.3625 39.8792L10.4167 36.9333L22.2021 25.1479Z" fill="#5DC1B4"/>
                                </svg>
                            </div>
                        </div>
                        : <div className="circleContainer" onClick={() => showAllOptionsHandler(true)}>
                            {/*add*/}
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5352 7.42188H26.4648C26.7253 7.42188 26.8555 7.55208 26.8555 7.8125V42.1875C26.8555 42.4479 26.7253 42.5781 26.4648 42.5781H23.5352C23.2747 42.5781 23.1445 42.4479 23.1445 42.1875V7.8125C23.1445 7.55208 23.2747 7.42188 23.5352 7.42188Z" fill="#5DC1B4"/>
                                <path d="M8.59375 23.1445H41.4062C41.6667 23.1445 41.7969 23.2747 41.7969 23.5352V26.4648C41.7969 26.7253 41.6667 26.8555 41.4062 26.8555H8.59375C8.33333 26.8555 8.20312 26.7253 8.20312 26.4648V23.5352C8.20312 23.2747 8.33333 23.1445 8.59375 23.1445Z" fill="#5DC1B4"/>
                            </svg>
                        </div>
                }
            </div>
        </div>
    );
};

export default ViewPhotos;