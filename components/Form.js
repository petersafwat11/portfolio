import React from 'react'
import { useEffect,useState, useReducer } from 'react';
import {useRouter} from 'next/router'


const reducerFunc = (state, action)=>{
    if (action.type === 'NAME'){
        const newState= {...state, name:{entered:action.value, valid: action.value.trim().length !==0? true: false }}
        return newState;
    }
    if (action.type === 'EMAIL'){
        const newState= {...state, email:{entered:action.value, valid: action.value.includes('@') ? true: false }}
        return newState;
    }
    if (action.type === 'SUBJECT'){
        const newState= {...state, subject:{entered:action.value, valid: action.value.trim().length >4? true: false }}
        return newState;

    }
    if (action.type === 'PHONE'){
        const newState= {...state, phone:{entered:action.value, valid: action.value.trim().length >4? true: false }}
        return newState;
    }
    if (action.type === 'MESSAGE'){
        const newState= {...state, message:{entered:action.value, valid: action.value.trim().length >10? true: false }}
        return newState;
    }
    if(action.type==='CLEARDATA'){
        return {name : {entered : '', valid: false} , phone : {entered : '', valid: false}, email : {entered : '', valid: false}, subject : {entered : '', valid: false}, message : {entered : '', valid: false} };
    }

return initialState;
}

const Form = () => {
    const [modal, setModal] = useState(false);
    const [sendForm, setSendForm] = useState(false);
    const router =useRouter();
    const initialState = {name : {entered : '', valid: false} , phone : {entered : '', valid: false}, email : {entered : '', valid: false}, subject : {entered : '', valid: false}, message : {entered : '', valid: false} };
    const [state, dispatchState] = useReducer(reducerFunc ,initialState) 
    const nameHandeler = (e)=>{
        dispatchState({type: 'NAME', value: e.target.value})
    }
    const emailHandeler = (e)=>{
        dispatchState({type: 'EMAIL', value: e.target.value})
    }
    const phoneHandeler = (e)=>{
        dispatchState({type: 'PHONE', value: e.target.value})
    }
    const subjectHandeler = (e)=>{
        dispatchState({type: 'SUBJECT', value: e.target.value})
    }
    const messageHandeler = (e)=>{
        dispatchState({type: 'MESSAGE', value: e.target.value})
    }


    useEffect(()=>{
        if(state.name.valid
            && state.email.valid
            && state.subject.valid
            && state.phone.valid
            && state.message.valid
    
             ){
             setSendForm(true)
         }
    
    },[state]);
    const modalhandeler= ()=>{
        setModal(true);
        setTimeout(()=>{
            setModal(false)
            router.push('/')
        },3000)
    }
    const submitForm = (e)=>{
        e.preventDefault();
        modalhandeler();
        dispatchState({type: 'CLEARDATA'})
    } 

  return (
    <>
    {modal && <div className='text-green-500 text-center z-100 fixed top-[50%] rounded-xl left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-50 py-8 px-4 ' >your request has been sent successfuly<br/> i will reach you soon. </div>}
    <form onSubmit={submitForm} className='w-[92%] mx-auto' >
    <div className='grid lg:grid-cols-2 gap-6 py-2'>
        <div className='flex flex-col'>
            <label htmlFor='name' className='uppercase text-sm py-1 '>NAME</label>
            <input onChange={nameHandeler} value={state.name.entered} type='text' id='name' className='border-2 p-3 rounded-lg flex border-gray-300'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='number' className='uppercase text-sm py-1 '>phone number</label>
            <input onChange={phoneHandeler} value={state.phone.entered} type='number' id='number' className='border-2 p-3 rounded-lg flex border-gray-300'/>
        </div>
    </div>
    <div className='flex flex-col py-2 '>
            <label htmlFor='email' className='uppercase text-sm py-1 '>email</label>
            <input onChange={emailHandeler} value={state.email.entered} type='email' id='email' className='border-2 p-3 rounded-lg flex border-gray-300'/>
    </div>
    <div className='flex flex-col py-2'>
            <label htmlFor='subject' className='uppercase text-sm py-1 '>subject</label>
            <input onChange={subjectHandeler} value={state.subject.entered} type='text' id='subject' className='border-2 p-3 rounded-lg flex border-gray-300'/>
    </div>
    <div className='flex flex-col py-2 '>
            <label htmlFor='textarea' className='uppercase text-sm py-1 '>message</label>
            <textarea onChange={messageHandeler} value={state.message.entered} className=' border-2 rounded-lg p-3 border-gray-300 ' rows='10'/>
    </div>
    <div className='py-2 shadow-lg shadow-gray-300 '>
        {!sendForm&& <p className='text-red-500 text-center p-1 '>please enter all your data</p>}
            <button disabled={!sendForm} type='submit' className='disabled:bg-blue-200 rounded-xl p-3 w-full disabled:cursor-not-allowed  tracking-widest uppercase text-lg bg-[#5651e5] text-white' >
                { sendForm? 'send message': 'please enter your message' }
            </button>
    </div>

</form>
</>
)
}

export default Form
