import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Button from './Button';

describe('Button tests', () => {
  it('Test if button click works', async () => {
    const myFunc = jest.fn();
    const { findByRole } = render(
      <Button role="test-button" onClick={myFunc}>
        Test
      </Button>
    );

    const foundButton = await findByRole('test-button');

    act(() => {
      fireEvent.click(foundButton);
    });

    expect(myFunc).toHaveBeenCalledTimes(1);
  });
});
