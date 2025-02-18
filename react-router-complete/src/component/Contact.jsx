import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl">Contact us</h1>
      <Outlet />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
        sequi? Deleniti, eos dolore. Dolor culpa aperiam tempore blanditiis
        optio voluptate eaque corporis, numquam a adipisci necessitatibus earum,
        deleniti assumenda rerum?
      </p>
      <Link
        to={{
          pathname: '/contact/info/1234/12',
        }}
      >
        Contact Info
      </Link>
    </div>
  );
};

export default Contact;
