import React from 'react';
import MealsImage from '../../assets/images/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1 >React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt='A Table Full of Delicious Food' />
            </div>
        </>
    )
}

export default Header;
