import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardProduct from './components/Product/CardProduct';
import CartTableRow from './components/Cart/CartTableRow'
import CartList from './pages/CartList'
import Header from './components/Header'
import Eshop from './context/Eshop'
import userEvent from '@testing-library/user-event'

window.scrollTo = jest.fn();

const testProduct = {
    id: '1',
    attributes: {
        name: 'Product name',
        subtitle: '',
        price: 100
    },
    quantity: 3
}

test('render product card, add to cart, then test product count in header', () => {

    render(
        <MemoryRouter>
            <Eshop>
                <Header />
                <CardProduct product={testProduct} />
            </Eshop>
        </MemoryRouter>
    )

    const totalCount = screen.getByRole('header-total')
    expect(totalCount.innerHTML).toEqual('0')

    const addToButton = screen.getByRole('add-product')
    userEvent.click(addToButton)
    expect(totalCount.innerHTML).toEqual('1');
});

test('render empty cart, test error message and button', () => {

    render(
        <MemoryRouter>
            <Eshop>
                <CartList />
            </Eshop>
        </MemoryRouter>
    )

    expect(screen.getByText('Váš košík je prázdný.')).toBeInTheDocument()
    expect(screen.getByText('Zobrazit katalog')).toBeInTheDocument()
})

test('render cart, add product, increment count, ten decrement twice', () => {

    render(
        <MemoryRouter>
            <Eshop>
                <Header />
                <CardProduct product={testProduct} />
                <CartList />
            </Eshop>
        </MemoryRouter>
    )

    // First, add product to the cart
    userEvent.click(screen.getByRole('add-product'))

    const countInput = screen.getByRole('product-count')
    expect(countInput).toHaveValue("1")

    // Test plus/minus buttons
    const incrementBtn = screen.getByRole('increment')
    const decrementBtn = screen.getByRole('decrement')

    fireEvent.click(incrementBtn)
    expect(countInput).toHaveValue("2")

    fireEvent.click(decrementBtn)
    expect(countInput).toHaveValue("1")

    // Zero count is not allowed
    fireEvent.click(decrementBtn)
    expect(countInput).toHaveValue("1")
});

