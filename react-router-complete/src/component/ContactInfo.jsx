import { useParams } from 'react-router-dom';

const ContactInfo = () => {
  const { data, id } = useParams();

  console.log(data);
  console.log("id " + id);
  return (
    <div className="contact-info">
      <p className="text-3xl">Contact Info</p>
    </div>
  );
};

export default ContactInfo;
