import { useForm } from "react-hook-form";
import { authService } from "../services/authService";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import css from './RegisterPage.module.css'

const LoginPage = () => {
    const {handleSubmit, register} = useForm();
    const [responseMessage, setResponseMessage] = useState(null)


    useEffect(() => {
        localStorage.clear()
    }, []);


    const navigate = useNavigate();
    const onSubmit = async (user) => {
        localStorage.clear()
        const response = await authService.login(user)
        
        if(response?.status == 200){
            navigate('/main')
        }

        setResponseMessage(
            {
                'message': response?.message,
                'status': response?.status
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>login</button>
            </form>
            <NavLink to={'/register'}>New User? Register...</NavLink>
            {responseMessage && 
                <div className={responseMessage.status === 401 && css.messageFail}>
                    {responseMessage.message.toUpperCase()}
                </div>
            }
        </div>
        
    );
};

export {LoginPage};