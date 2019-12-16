// Test away!
import React from "react";
import { render } from '@testing-library/react'
import Display from "./Display";


test('Is Gate Open Or Closed, Is Gate Locked Or Unlocked',()=> {
    const locked = false
    const closed = false
    const display = render(<Display locked={locked} closed={closed}/>)
    display.getByText(/unlocked/i)
    display.getByText(/open/i)
})

test('Is Gate Closed', ()=>{
    const closed = true
    const display = render(<Display closed={closed}/>)
    display.getByText(/closed/i)
})

test('Is Gate Locked', ()=>{
    const locked = true
    const display = render(<Display locked={locked}/>)
    display.getByText(/locked/i)
})

test('Is Light Green', ()=>{
    const locked = false
    const closed = false

    const display = render(<Display locked={locked} closed={closed}/>)
    const unlocked = display.getByText(/unlocked/i)
    const open = display.getByText(/open/i)

    expect(unlocked.classList.contains('green-led')).toBe(true)
    expect(open.classList.contains('green-led')).tobe(true)
})

test('Is Light Red', ()=>{
    const locked = true
    const closed = true

    const display = render(<Display locked={locked} closed={closed}/>)
    const unlocked = display.getByText(/unlocked/i)
    const open = display.getByText(/open/i)

    expect(unlocked.classList.contains('red-led')).toBe(true)
    expect(open.classList.contains('red-led')).tobe(true)
})