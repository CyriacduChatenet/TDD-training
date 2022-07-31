import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';

test('Modal test', () => {
    render(<Modal title="Modal title" description="Modal description" onClose={() => null}/>);

    const title = screen.getByText('Modal title');

    expect(title).toBeInTheDocument();
});

test('close Modal on x click', () => {
    const mockClose = jest.fn();
    render(<Modal title="Modal title" description="Modal description" onClose={mockClose}/>);

    const close = document.querySelector('#modal-btn');
    fireEvent.click(close);

    expect(mockClose.mock.calls.length).toBe(1);
});

test('close Modal on escape keypress', () => {
    const mockClose = jest.fn();
    render(<Modal title="Modal title" description="Modal description" onClose={mockClose}/>);

    const close = document.querySelector('#modal-btn');
    fireEvent.keyDown(document, {key : 'escape'}, close);

    expect(mockClose.mock.calls.length).toBe(1);
});