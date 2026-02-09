import { renderHook, act } from '@testing-library/react';
import { CartItem } from '@/models/CartItem';
import { ReactNode } from 'react';
import { CartProvider, useCart } from './CartProvider';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('CartContext', () => {
  it('should add an item to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const item: CartItem = {
        id: '1', 
        name: 'Test device', 
        price: 20,
        image: 'imageUrl',
        color: 'black',
        storage: '256 GB'
    };

    act(() => {
      result.current.addToCart(item);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0]).toEqual(item);
  });

  it('should remove an item from the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const item: CartItem = {
        id: '1', 
        name: 'Test device', 
        price: 20,
        image: 'imageUrl',
        color: 'black',
        storage: '256 GB'
    };

    act(() => {
      result.current.addToCart(item);
    });

    act(() => {
      result.current.removeFromCart('1');
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it('should clear the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const item: CartItem = {
        id: '1', 
        name: 'Test device', 
        price: 20,
        image: 'imageUrl',
        color: 'black',
        storage: '256 GB'
    };

    act(() => {
      result.current.addToCart(item);
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
  });
});
