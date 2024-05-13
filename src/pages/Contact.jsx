import React from 'react';

const Contact = () => {
    const contactDetails = {
        name: 'Kanishk',
        email: 'kanishk23bcy3@iiitkottayam.ac.in',
        phone: '7011245992'
    };

    return (
        <div className=" p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-2">Name: {contactDetails.name}</p>
            <p className="mb-2">Email: {contactDetails.email}</p>
            <p>Phone: {contactDetails.phone}</p>
        </div>
    );
};

export default Contact;
