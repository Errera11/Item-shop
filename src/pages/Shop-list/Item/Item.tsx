import React, {useState} from 'react';
import classes from './item.module.css';
import {IProduct} from "../../../models/models";

export const Item = ({image, title, description, id, price, rating, category}: IProduct) => {

    const [isDescription, setDescription] = useState(false);

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperItems}>
                <div>
                    <img className={classes.image} src={image}/>
                </div>
                <div className={classes.title}>
                    {title}
                </div>
                {
                    isDescription ?
                        <>
                            <div className={classes.description}>{description}</div>
                            <div className={classes.descriptionBtn} onClick={() => setDescription(false)}>Hide
                                description
                            </div>
                        </>
                        :
                        <div className={classes.descriptionBtn} onClick={() => setDescription(true)}>Show
                            description</div>
                }
            </div>
        </div>
    );
};
