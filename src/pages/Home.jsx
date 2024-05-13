import React from 'react'
import Name from '../components/Name'
import './home.css'
import { useState, useRef } from 'react'
import EyeOpen from '../components/EyeOpen'
import EyeClsoe from '../components/EyeClose'
import { useForm } from "react-hook-form"
import DataList from '../components/DataList'
import { DataContext } from '../Context/context'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/', {method: 'GET'})
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])
    const [PasswordVisibility, setPasswordVisibility] = useState(false)
    const changeVisibilty = () => {
        setPasswordVisibility(!PasswordVisibility)
    }
    const [Data, setData] = useState([])
    const {
        register,
        handleSubmit,
        isSubmitting,
        formState: { errors },
    } = useForm()
    const onsubmit = async (data) => {
        const response = await fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data,index:Data.length+1}),
        });
        toast.success('Password Added Successfully')
        setData([...Data, {...data,index:Data.length+1}])
        formref.current.reset();
        return response;
    };
    const formref = useRef();
    return (<>
        <div className='main'>
            <DataContext.Provider value={{ Data, setData, formref, toast }}>
                <div className='heading'>
                    <Name />
                    <p>Where Every Password is Treated Like Treasure</p>
                </div>
                <form ref={formref} className='form' onSubmit={handleSubmit(onsubmit)}>
                    <input {...register("Website")} placeholder='Enter the url of website' type="text" />
                    <div className="inner">
                        <input {...register("Uname")} placeholder='Username' type="text" />
                        <div className="password">
                            <input {...register("password")} className='pwdipt' placeholder='Password' type={PasswordVisibility ? "text" : "password"} />
                            <div onClick={changeVisibilty} className="eyeImage">
                                {PasswordVisibility ? <EyeOpen /> : <EyeClsoe />}
                            </div>

                        </div>
                    </div>
                    <button disabled={isSubmitting} type='submit'>
                        Add Password
                    </button>
                </form>
                {Data.length > 0 ? <DataList data={Data} /> : <p className='nodata'>No Data Available</p>}
            </DataContext.Provider>
        </div>
        <ToastContainer />
    </>
    );
}

export default Home
