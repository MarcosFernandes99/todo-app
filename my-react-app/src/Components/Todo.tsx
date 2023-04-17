import React, { useEffect, useRef, useState } from 'react'
import "./todoStyle.scss"
import FundoThemeDark from "../assets/bg-desktop-dark.jpg"
import Sun from "../assets/icon-sun.svg"
import Fechar from "../assets/icon-cross.svg"
import Lua from "../assets/icon-moon.svg"
import Check from "../assets/icon-check.svg"
import Circle from "../assets/circle2.svg"
import {FaCircle} from "react-icons/fa"
import {AiFillCheckCircle} from "@react-icons/all-files/ai/AiFillCheckCircle"



export const Todo = () => {
    const [tasks, setTasks] = useState<string[]>([])
    const taskRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask = taskRef.current?.value;
        if (newTask) {
            setTasks([...tasks, newTask]);
            e.currentTarget.reset();
        }
    }

    const removeTask = (index: number) => {
        const tasksCopy = [...tasks]
        tasksCopy.splice(index, 1)
        console.log(tasksCopy)
        setTasks(tasksCopy)
    }

    useEffect(()=> {
        setTasks
    }, [tasks])

    return (

        <main className='container'>
            <section className='containerNav'>
                <div className='imgFundo'>
                    <span className='title'>T O D O</span>
                    <img src={FundoThemeDark} alt='ImageDeFundo' />
                    <form className='form' onSubmit={handleSubmit}>
                        <input className='task' type="text" name="task" id="task" placeholder='Digite aqui sua tarefa' ref={taskRef} />
                        <button type="submit"><FaCircle/></button>
                    </form>
                    <img className='sun' src={Sun} alt="Sun" />
                </div>

                <div className='taksList'>
                    {tasks.map((task, index) => (
                        <div className='list' key={index}>{task} <button onClick={() => removeTask(index)}><AiFillCheckCircle/></button> </div>
                    ))}
                </div>
            </section>


        </main>
    )
}