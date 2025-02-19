import { useParams } from 'react-router-dom';

const ContactInfo = () => {
  const { data, id } = useParams();
 
  return (
    <div className="contact-info">
      <p className="text-3xl">Contact Info</p>
    </div>
  );
};

export default ContactInfo;
