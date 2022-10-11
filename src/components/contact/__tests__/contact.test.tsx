import { ContactInfo } from "../contact-info";
import { ContactForm } from "../contact-form";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Contact/>', () => {
    describe('<ContactForm />', () => {

        it('should validate form when fields are empty', async () => {
            render(<ContactForm />);
            const btn = screen.getByTestId('btn-send');
            fireEvent.click(btn);

            await waitFor(() => expect(
                screen.getAllByRole('error')
            ).toHaveLength(4));

            expect(screen.getByTestId('name-error'))
                .toHaveTextContent('This field is required.');
        });

        it('should validate email', async () => {
            render(<ContactForm />);

            const email = screen.getByTestId('email');
            userEvent.type(email, 'testtest.com');

            await waitFor(() => expect(
                screen.getByTestId('email-error')
            ).toBeInTheDocument());

            expect(screen.getByTestId('email-error'))
                .toHaveTextContent('Invalid email.');
        });

        it('should validate message', async () => {
            render(<ContactForm />);

            const email = screen.getByTestId('message');
            userEvent.type(email, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium dapibus maximus. Maecenas elit nisl, pellentesque non massa ut, fermentum lobortis metus. Sed non diam diam. Nam purus purus, sodales ut metus id, auctor ultricies odio. Mauris vel gravida diam. In non eros at lacus ornare tempus. Duis vel pretium massa, nec pellentesque mauris. Aenean pellentesque porttitor enim eget tincidunt. Curabitur vitae rutrum urna. Duis quis euismod eros, porttitor sollicitudin lorem. Aliquam erat volutpat.');

            await waitFor(() => expect(
                screen.getByTestId('message-error')
            ).toBeInTheDocument());

            expect(screen.getByTestId('message-error'))
                .toHaveTextContent('Enter a maximum of 512 characters.');
        });
    });

    describe('<ContactInfo />', () => {
        it('should render', async () => {
            render(<ContactInfo />);
            expect(screen.getByTestId('container')).toBeInTheDocument();
            expect(screen.getByTestId('email')).toBeInTheDocument();
        });
    });
});