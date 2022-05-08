import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Checkbox from './Checkbox';

describe('Checkbox tests', () => {
  it('Test if Checkbox click works', async () => {
    let active = false;
    const dummyFunc = jest.fn();
    const toggleActive = () => {
      active = !active;
      dummyFunc();
    };
    const { findByRole } = render(
      <Checkbox active={active} onClick={toggleActive} role="test-checkbox" />
    );

    const foundCheckbox = await findByRole('test-checkbox');

    act(() => {
      fireEvent.click(foundCheckbox);
    });

    expect(dummyFunc).toHaveBeenCalledTimes(1);
    expect(active).toBeTruthy();
  });
});
