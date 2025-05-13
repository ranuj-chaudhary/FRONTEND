import { createContext, useContext, useEffect, useReducer } from 'react';
// Actions types
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';
const REMOVE__CART_ITEMS = 'REMOVE__CART_ITEMS';

const ProductContext = createContext(null);

function ProductReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case ADD_CART_ITEMS:
      //check if item already added to cart
      const item = state.cart.find((ele) => ele.id === action.payload.id);
      let updatedCart;
      // if exist
      if (item) {
        // find the element and increase only the quantity of that element equal action.payload.id
        updatedCart = [...state.cart].map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return {
              ...item,
            };
          }
        });
      } else {
        // if no item with id of item exist, simply push the value.
        updatedCart = [...state.cart];
        updatedCart.push(action.payload);
      }
      return {
        ...state,
        cart: [...updatedCart],
      };
    case REMOVE__CART_ITEMS:
      return {
        ...state,
        cart: [
          ...state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
        ],
      };
    default:
      return {
        ...state,
      };
  }
}

const initialState = {
  products: [],
  cart: [],
};

function ProductsProvider({ children }) {
  const [{ products, cart }, dispatch] = useReducer(
    ProductReducer,
    initialState
  );

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://www.dummyjson.com/products');
      const data = await res.json();
      console.log(data);
      dispatch(addProducts(data.products));
    }
    fetchProducts();
  }, [dispatch]);

  return (
    <ProductContext.Provider value={{ products, cart, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    payload: [...products],
  };
}

export function addCartItems(item) {
  return {
    type: ADD_CART_ITEMS,
    payload: item,
  };
}
export function removeCartItem(id) {
  return {
    type: REMOVE__CART_ITEMS,
    payload: { id },
  };
}

function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    console.error('Not valid context provided');
  }

  return context;
}

export { useProductContext, ProductsProvider };
