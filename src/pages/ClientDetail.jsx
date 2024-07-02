import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientsData from './ClientData';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const Card = ({ children }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
        {children}
    </div>
);

const CardImage = ({ src }) => (
    <div className="rounded-lg overflow-hidden mb-4">
        <img className="w-full h-48 object-cover" src={src} alt="Client" />
    </div>
);

const ClientDetail = () => {
    const { id } = useParams();
    const [editing, setEditing] = useState(false);
    const [client, setClient] = useState(ClientsData.find(client => client.id === parseInt(id, 10)) || {});

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSave = () => {
        // Update client data in your data source or API here
        console.log('Updated client:', client);
        setEditing(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Client Detail</h1>
            <Card>
                {/* Assuming client.image exists in your data structure */}
                {client.image && <CardImage src={client.image} />}
                {editing ? (
                    <form onSubmit={handleSave}>
                        <Input name="first_name" label="First Name" value={client.first_name} onChange={handleChange} className="mb-4" />
                        <Input name="last_name" label="Last Name" value={client.last_name} onChange={handleChange} className="mb-4" />
                        <Input name="country" label="Country" value={client.country} onChange={handleChange} className="mb-4" />
                        <Input name="phone" label="Phone" value={client.phone} onChange={handleChange} className="mb-4" />
                        <Input name="email" label="Email" value={client.email} onChange={handleChange} className="mb-4" />
                        <div className="flex justify-end">
                            <Button onClick={handleEditToggle} className="mr-2">Cancel</Button>
                            <Button type="submit" primary>Save</Button>
                        </div>
                    </form>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold mt-4">{client.first_name} {client.last_name}</h2>
                        <p className="mt-2 text-gray-600">Country: {client.country}</p>
                        <p className="mt-2 text-gray-600">Phone: {client.phone}</p>
                        <p className="mt-2 text-gray-600">Email: {client.email}</p>
                        <div className="flex justify-end">
                            <Button onClick={handleEditToggle}>Edit</Button>
                        </div>
                    </>
                )}
            </Card>
        </div>
    );
}

export default ClientDetail;
