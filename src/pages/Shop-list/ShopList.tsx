import React, {useEffect} from 'react';
import {fetchData} from "../../API/API";
import {useState} from "react";
import classes from './shopList.module.css';
import Pagination from "../../UI/pagination/Pagination";
import {useDispatch} from "react-redux";
import {shopListAC} from "../../redux/reducers/shopList-reducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Item} from "./Item/Item";
import {useFetching} from "../../hooks/useFetching";
import Loader from '../../UI/loader/Loader';
import Modal from "../../UI/Modal/Modal";

export const ShopList = () => {

    const dispatch = useDispatch();

    const [isModal, setModal] = useState(false);

    const items = useTypedSelector(state => state.shopList.items);

    const [limit, setLimit] = useState<number>(1);

    const [fetchNewPortion, isLoading, error] = useFetching(
        async () => {
            setLimit(limit + 2);
            const response = await fetchData(limit);
            dispatch(shopListAC(response.data));
        }
    );


    useEffect(() => {
        fetchNewPortion();
    }, []);

    return (
        <>
            {isModal && <Modal onClose={() => setModal(false)} title={'Create new post'}/>}
            {!isModal && <div className={classes.createButton}
                              onClick={() => setModal(true)}> + </div>
            }
            <div className={classes.wrapper}>
                {isLoading ? <div><Loader/></div> :
                    <div className={classes.wrapper}>
                        {items.map(item => <Item key={item.id} image={item.image}
                                                 title={item.title}
                                                 description={item.description}
                                                 price={item.price}
                                                 category={item.category}
                                                 id={item.id}
                                                 rating={item.rating}
                        />)}
                        {
                            error && <div>Error: {error}</div>
                        }
                    </div>
                }
                <Pagination newPortion={() => fetchNewPortion()}/>
            </ div>
        </>
    );
};

export default ShopList;