import React, { useEffect, useRef, useState } from 'react'
import "./todoStyle.scss"
import FundoThemeDark from "../assets/bg-desktop-dark.jpg"
import Sun from "../assets/icon-sun.svg"
import Lua from "../assets/icon-moon.svg"
import Check from "../assets/icon-check.svg"
import Circle from "../assets/circle2.svg"
import { FaCircle } from "react-icons/fa"
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"


export const Todo = () => {
    const [tasks, setTasks] = useState<string[]>([])
    const taskRef = useRef<HTMLInputElement>(null);
    const [showOptions, setShowOptions] = useState(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask = taskRef.current?.value;
        if (newTask) {
            setTasks([...tasks, newTask]);
            e.currentTarget.reset();
            setShowOptions(true)
        }
    }

    const removeTask = (index: number) => {
        const tasksCopy = [...tasks]
        tasksCopy.splice(index, 1)
        console.log(tasksCopy)
        setTasks(tasksCopy)
    }

    const checkTask = (index: number) => {
        const elements = document.getElementsByClassName('list')
        const buttons = document.getElementsByClassName('circleCheck')
        const element = elements[index] as HTMLDivElement;
        const button = buttons[index] as HTMLDivElement
        if (element.style.textDecoration === 'line-through') {
            element.style.textDecoration = 'none';
            button.style.color = '#161721'
        } else {
            element.style.textDecoration = 'line-through';
            button.style.color = '#F9F9F9'
        }
    };

    const clearTasks = () => {
        const clear: string[] = [];
        setTasks(clear);
        setShowOptions(false);
      };

return (

    <main className='containerMain'>
        <section className='container'>
            <div className='imgFundo'>
                <span className='title'>T O D O</span>
                <img className='img' src={FundoThemeDark} alt='ImageDeFundo' />
                <form className='form' onSubmit={handleSubmit}>
                    <input className='task' type="text" name="task" id="task" placeholder='Digite aqui sua tarefa' ref={taskRef} maxLength={35} />
                    <button><FaCircle /></button>
                </form>
                <img className='sun' src={Sun} alt="Sun" />
            </div>  

            <div className='taksList'>
                {tasks.map((task, index) => (
                    <div className='list' key={index}>{task}
                        <button className='circleCheck' onClick={() => checkTask(index)}><AiFillCheckCircle /></button>
                        <button className='close' onClick={() => removeTask(index)}><AiOutlineClose /></button>
                    </div>
                ))}
            </div>

            <div className={showOptions ? 'otherOptions' : 'otherOptionsHidden'}>
                    <span className='clear' onClick={() => clearTasks()}>Clear List</span>
            </div>
        </section>
    </main>
)
}