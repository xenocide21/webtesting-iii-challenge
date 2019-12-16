// Test away
import { render } from '@testing-library/react';
import React from 'react'
import Dashboard from './Dashboard.js'
import Display from '../display/Display.js'
import Controls from '../controls/Controls.js'

test('Is Display On', () => {
    render(<Display />);
});

test('Are Controls On', () => {
    render(<Controls />);
});