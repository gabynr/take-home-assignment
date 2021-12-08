import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from './App'

it('changes from uppercase to lowercase when the user click in the checkbox Convert text to lowercase ', () => {
    const { getByLabelText, getByText } = render(<App />)
    const textArea = getByLabelText('Text to be converted:')
    fireEvent.change(textArea, {target: {value: 'THE TEST CHECKBOX'}})

    const checkbox = getByLabelText('Convert text to lowercase')
    fireEvent.change(checkbox,{target: {value: true }} )

    const submitButton = getByText('Submit')
    fireEvent.click(submitButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }))

    const result = getByLabelText('Converted text:')
    expect(result.innerHTML).toBe('the test checkbox')
});

it('changes from lowercase to uppercase when the user click in the checkbox Convert text to uppercase ', () => {
    const { getByLabelText, getByText } = render(<App />)
    const textArea = getByLabelText('Text to be converted:')
    fireEvent.change(textArea, {target: {value: 'u'}})

    const checkbox = getByLabelText('Convert text to uppercase')
    fireEvent.change(checkbox,{target: {value: true }} )

    const submitButton = getByText('Submit')
    fireEvent.click(submitButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }))

    const result = getByLabelText('Converted text:')
    expect(result.innerHTML).toBe('U')
});

