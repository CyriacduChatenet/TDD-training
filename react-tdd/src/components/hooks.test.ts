import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useToggle } from './hooks';

it('toggleHook', () => {
    const { result }= renderHook(() => useToggle(false));

    expect(result.current[0]).toBeFalsy();
    
    act(() => result.current[1]());

    expect(result.current[0]).toBeTruthy();
})