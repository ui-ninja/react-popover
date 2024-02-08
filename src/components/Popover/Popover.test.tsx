import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Popover from './Popover';

describe('App', () => {
  function setup() {
    const screen = render(
      <Popover>
        <Popover.Button>Toggle popover</Popover.Button>
        <Popover.Content>
          <p>this is popover content, shown when button is clicked</p>
        </Popover.Content>
      </Popover>
    );

    const button = screen.getByRole('button', {
      name: 'Toggle popover',
    });

    const popoverContext = screen.queryByText(
      /this is popover content, shown when button is clicked/i
    );

    return {
      ...screen,
      button,
      popoverContext,
    };
  }
  test('renders button', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  test('should not show popover on load', () => {
    const { popoverContext } = setup();
    expect(popoverContext).not.toBeInTheDocument();
  });

  test('should show popover when clicked on button', async () => {
    const { button, findByText } = setup();
    const user = userEvent.setup();

    // click button
    user.click(button);

    // expect popover content to show
    const content = await findByText(
      /this is popover content, shown when button is clicked/i
    );
    expect(content).toBeInTheDocument();
  });
});
