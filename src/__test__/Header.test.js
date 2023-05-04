import { render, screen } from '@testing-library/react'
import Header from '../components/Header';

it('componente Header', () => {
    const { getByTestId } = render(<Header title={'test'} />)
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
});