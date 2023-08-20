import React, {useContext} from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import cartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const cartCtx =  useContext(cartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    } , 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton
