import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import { authService } from "../services/authService";
import { NavLink } from "react-router-dom";

import css from './RegisterPage.module.css'


const RegisterPage = () => {
    const {handleSubmit, register} = useForm();
    const [response, setResponse] = useState(null)

    useEffect(() => {
        localStorage.clear()
    }, []);

    const registration= async (formData) => {
        const dataToSend = {
            email: formData.email,
            password: formData.password,
            profile: {
                name: formData.name,
                surname: formData.surname
            }
        }
        const response = await authService.register(dataToSend);
        setResponse(
            {
                'message': response.message,
                'status': response.status
            }
        );
    }


    return (
        <div>
            <form onSubmit={handleSubmit(registration)}>
                <h3>Registration</h3>
                <input type="text" placeholder="email" {...register('email')}/>
                <input type="text" placeholder="password" {...register('password')}/>
                <input type="text" placeholder="name" {...register('name')}/>
                <input type="text" placeholder="surname" {...register('surname')}/>
                <button>Register</button>
            </form>
            <NavLink to={'/login'}>Have an account already? To Login...</NavLink>
            {response && 
                <div className={response.status === 201 ? css.messageSuccess : css.messageFail}>
                    {response.message.toUpperCase()}
                </div>
            }
        </div>
    );
}

export {RegisterPage}