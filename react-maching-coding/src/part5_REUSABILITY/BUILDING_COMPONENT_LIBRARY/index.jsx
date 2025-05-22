import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./BUTTON/Button"
import { FaMoneyBill } from "react-icons/fa"
/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
 */

function App() {
  return (
    <main>
      <Button variant="success" size="sm">Success</Button>
      <Button variant="warning" size="md">Warning</Button>
      <Button variant="danger" size="lg">Danger</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);