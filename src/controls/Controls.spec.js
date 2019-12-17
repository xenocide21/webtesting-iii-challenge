// Test away!
import React from 'react'
import Controls from './Controls.js'
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test('Do Toggle Buttons Switch', () => {

    const locked= false;
    const closed= true;
    const toggleLocked= jest.fn(() => () => !locked)
    const toggleClosed= jest.fn(() => () => !closed)

    const controls = render( <Controls
        locked={locked}
        closed={closed}
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
    />);

    fireEvent.click(controls.getByText(/Open Gate/i))
    expect(toggleClosed).toHaveBeenCalledTimes(1);

    fireEvent.click(controls.getByText(/Lock Gate/i))
    expect(toggleLocked).toHaveBeenCalledTimes(1);

})

test('Do Buttons Change State', () => {
    let locked= false;
    let closed= false;


    const { container } = render( <Controls
        locked={locked}
        closed={closed}
    />);

    const closeGate = container.querySelectorAll('button')[1];
    expect(closeGate.textContent).toBe('Close Gate');
    const lockGate = container.querySelector('button')
    expect(lockGate.textContent).toBe('Lock Gate');


})

test('Is Closed Disabled When Locked', () => {
    const locked= true;
    const closed= true;
    const toggleClosed= jest.fn(() => () => !closed)

    const controls = render( <Controls
        locked={locked}
        closed={closed}
        toggleClosed={toggleClosed}
    />);

    const closedButton = controls.getByText(/Open Gate/i);
    fireEvent.click(closedButton);
    expect(toggleClosed).toHaveBeenCalledTimes(0);

})

test('Is Locked Disabled When Open', () => {

    const locked= false;
    const closed= false;
    const toggleLocked= jest.fn(() => () => !locked)

    const controls = render( <Controls
        locked={locked}
        closed={closed}
        toggleLocked={toggleLocked}
    />);

    const lockedButton = controls.getByText(/Lock Gate/i);
    fireEvent.click(lockedButton);
    expect(toggleLocked).toHaveBeenCalledTimes(0);

})
