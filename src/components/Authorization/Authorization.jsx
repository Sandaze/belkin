import css from './Authorization.module.css';
import React, {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {authApi} from "../../api/api";

export const ConfirmPassword = (props) => {
    const [oneTimePassword, setOneTimePassword] = useState(authApi.getOneTimePassword());
    const [code, setCode] = useState('');
    const [isValidData, setIsValidData] = useState(false);
    const [confirmIsClicked, setConfirmIsClicked] = useState(false);

    console.log('OTP:' + ' ' + oneTimePassword);

    const checkOTP = () => {
        setConfirmIsClicked(true);
        if(code === oneTimePassword){
            setIsValidData(true);
        }
    }

    if(isValidData) return <Redirect to={'/cards'} />

    return (
        <div className={css.auth + ' ' + css.confirm}>
            <h1>Подтверждение</h1>
            <div className={css.authBox}>
                <div className={css.inputBx}>
                    <input onChange={(e) => setCode(e.currentTarget.value)} type="text" value={code}
                           placeholder={'Code from SMS'}/>
                    {confirmIsClicked && <div className={`${css.errorBx} ${!isValidData ? css.active : ''}`}>
                        <div className={css.errorBxIcon}>!</div>
                        <div className={css.errorBxMessage}>Неправильно введен SMS</div>
                    </div>}
                </div>
                <div className={css.buttonBx}>
                    <button onClick={checkOTP}>Confirm</button>
                </div>
            </div>
        </div>)
}

export const Authorization = (props) => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [isValidData, setIsValidData] = useState(false);
    const [loginIsClicked, setLoginIsClicked] = useState(false);

    let data = {
        'login': '1',
        'password': '1',
    }

    const checkValidate = (e) => {
        setLoginIsClicked(true);
        if (login !== data.login || pass !== data.password) {
            setIsValidData(false);
            console.log(1);
        } else {
            setIsValidData(true);
        }
    }

    const loginHandler = (e) => {
        setLogin(e.currentTarget.value);
    }
    const passwordHandler = (e) => {
        setPass(e.currentTarget.value);
    }
    if (isValidData) return <Redirect to={'/confirm'}/>
    return (
        <div className={css.auth}>
            <h1>Авторизация</h1>
            <div className={css.authBox}>
                <div className={css.inputBx}>
                    <input onChange={e => loginHandler(e)} value={login} type="text" placeholder={'Login'}/>
                    {loginIsClicked && <div className={`${css.errorBx} ${!isValidData ? css.active : ''}`}>
                        <div className={css.errorBxIcon}>!</div>
                        <div className={css.errorBxMessage}>Неправильно набран логин или пароль</div>
                    </div>}
                </div>
                <div className={css.inputBx}>
                    <input value={pass} onChange={e => passwordHandler(e)} type="password" placeholder={'Password'}/>
                    {loginIsClicked && <div className={`${css.errorBx} ${!isValidData ? css.active : ''}`}>
                        <div className={css.errorBxIcon}>!</div>
                        <div className={css.errorBxMessage}>Неправильно набран логин или пароль</div>
                    </div>}
                </div>
                <div className={css.buttonBx}>
                    <button onClick={checkValidate}>Login</button>
                </div>
            </div>
        </div>
    );
}