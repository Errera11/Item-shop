import {postData} from "../../API/API";
import styles from './Modal.module.css';
import React, {useState} from 'react';

interface IModal {
    title: string
    onClose: () => void

}

const Modal = ({title, onClose}: IModal) => {

    const [value, setValue] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await postData(value);
        setValue('');
    }

    const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <>
            <div className={styles.background} onClick={onClose}/>
            <div className={styles.wrapper} >
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <form onSubmit={submitHandler}>
                        <input placeholder={'Type...'} onChange={inputChange}/>
                        <button onClick={onClose}>Create product</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;