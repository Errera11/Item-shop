import React from 'react';
import s from './pagination.module.css';

const Pagination = ({newPortion}: any) => {

    return (
        <div className={s.show} onClick={() => newPortion()}>
            Show more
        </div>
    );
};

export default Pagination;