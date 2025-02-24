import React, { useRef } from 'react';
import useFetch from '../16.useFetch/useFetch';

const style = {
  btn: 'bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-md cursor-pointer px-4 py-2',
};
const ScrollTopToBottom = () => {
  const [products] = useFetch('https://www.dummyjson.com/products');
  const lastSection = useRef();
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleScrollToBottom(e) {
    lastSection.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
  return (
    <section className="flex flex-col justify-center items-center p-4">
      <button className={style.btn} onClick={handleScrollToBottom}>
        Scroll To Bottom
      </button>
      <div className="m-2">
        {products &&
          products.length &&
          products.map((prod) => (
            <li className="list-none" key={prod.id}>
              {prod.title}
            </li>
          ))}
      </div>
      <button
        className={style.btn}
        onClick={handleScrollToTop}
        ref={lastSection}
      >
        Scroll To Top
      </button>
    </section>
  );
};

export default ScrollTopToBottom;
