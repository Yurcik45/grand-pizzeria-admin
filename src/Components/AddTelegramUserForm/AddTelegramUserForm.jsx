import React from 'react';
import './AddTelegramUserForm.sass'

const AddTelegramUserForm = () => {
    return (
        <div>
            <form className={'NameCategory'}>
                <div className={'mainText'}>
                    <legend>Add Telegram Users</legend>
                </div>
                <legend className="NameCategoryItems"><span>Chat ID</span>
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12H14V24H12V12Z" fill="black"/>
                            <path d="M18 12H20V24H18V12Z" fill="black"/>
                            <path
                                d="M4 6V8H6V28C6 28.5304 6.21071 29.0391 6.58579 29.4142C6.96086 29.7893 7.46957 30 8 30H24C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28V8H28V6H4ZM8 28V8H24V28H8Z"
                                fill="black"/>
                            <path d="M12 2H20V4H12V2Z" fill="black"/>
                        </svg>
                    </button>
                </legend>
                <legend className="NameCategoryItems"><span>Chat ID</span>
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12H14V24H12V12Z" fill="black"/>
                            <path d="M18 12H20V24H18V12Z" fill="black"/>
                            <path
                                d="M4 6V8H6V28C6 28.5304 6.21071 29.0391 6.58579 29.4142C6.96086 29.7893 7.46957 30 8 30H24C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28V8H28V6H4ZM8 28V8H24V28H8Z"
                                fill="black"/>
                            <path d="M12 2H20V4H12V2Z" fill="black"/>
                        </svg>
                    </button>
                </legend>
                <legend className="NameCategoryItems"><span>Chat ID</span>
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12H14V24H12V12Z" fill="black"/>
                            <path d="M18 12H20V24H18V12Z" fill="black"/>
                            <path
                                d="M4 6V8H6V28C6 28.5304 6.21071 29.0391 6.58579 29.4142C6.96086 29.7893 7.46957 30 8 30H24C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28V8H28V6H4ZM8 28V8H24V28H8Z"
                                fill="black"/>
                            <path d="M12 2H20V4H12V2Z" fill="black"/>
                        </svg>

                    </button>
                </legend>
                <div className={'checkBox'}>
                    <input className={'checkInput'} type="text" placeholder={'Add Chat ID'}/>
                    <button>
                        <svg width="25" height="25" viewBox="0 0 45 45" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M43.2 0H1.8C0.804375 0 0 0.804375 0 1.8V43.2C0 44.1956 0.804375 45 1.8 45H43.2C44.1956 45 45 44.1956 45 43.2V1.8C45 0.804375 44.1956 0 43.2 0ZM32.8219 14.2706L20.9756 30.6956C20.8101 30.9267 20.5918 31.115 20.3389 31.2449C20.086 31.3748 19.8058 31.4426 19.5216 31.4426C19.2373 31.4426 18.9571 31.3748 18.7042 31.2449C18.4513 31.115 18.2331 30.9267 18.0675 30.6956L11.0531 20.9756C10.8394 20.6775 11.0531 20.2613 11.4187 20.2613H14.0569C14.6306 20.2613 15.1762 20.5369 15.5137 21.0094L19.5187 26.5669L28.3612 14.3044C28.6987 13.8375 29.2387 13.5562 29.8181 13.5562H32.4562C32.8219 13.5562 33.0356 13.9725 32.8219 14.2706V14.2706Z"
                                fill="black"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTelegramUserForm;