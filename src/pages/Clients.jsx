import React, { useState } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { useNavigate } from 'react-router-dom';
import ClientData from './ClientData';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const CheckboxCell = (props) => (
    <td>
        <Checkbox />
    </td>
);

const SerialNumberCell = (props) => (
    <td>
        {props.dataIndex + 1}
    </td>
);

const EmailCell = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/clients/' + props.dataItem.id);
    };

    return (
        <td onClick={handleClick} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            {props.dataItem.email}
        </td>
    );
};

const Clients = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

    const handleDialogToggle = () => {
        setShowDialog(!showDialog);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewClient({ ...newClient, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the new client submission here
        console.log('New client added:', newClient);
        setShowDialog(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Clients</h1>
            <Button primary={true.toString()} onClick={handleDialogToggle}>Add Client</Button>
            <Grid data={ClientData} className="shadow-md">
                <GridColumn field="checkbox" title=" " width="50px" cell={CheckboxCell} />
                <GridColumn field="sno" title="S.No." width="60px" cell={SerialNumberCell} />
                <GridColumn field="name" title="Name" width="200px" />
                <GridColumn field="email" title="Email" width="250px" cell={EmailCell} />
                <GridColumn field="phone" title="Phone" width="150px" />
                <GridColumn field="city" title="City" width="100px" />
                <GridColumn field="state" title="State" width="100px" />
                <GridColumn field="zip" title="Zip" width="100px" />
                <GridColumn field="address" title="Address" width="200px" />
                <GridColumn field="country" title="Country" width="100px" />
            </Grid>

            {showDialog && (
                <Dialog title="Add Client" onClose={handleDialogToggle}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input name="name" label="Name" value={newClient.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="email" label="Email" value={newClient.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="phone" label="Phone" value={newClient.phone} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="address" label="Address" value={newClient.address} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="city" label="City" value={newClient.city} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="state" label="State" value={newClient.state} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="zip" label="Zip" value={newClient.zip} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <Input name="country" label="Country" value={newClient.country} onChange={handleChange} required />
                        </div>
                        <DialogActionsBar>
                            <Button onClick={handleDialogToggle}>Cancel</Button>
                            <Button type="submit" primary={true.toString()}>Add</Button>
                        </DialogActionsBar>
                    </form>
                </Dialog>
            )}
        </div>
    );
}

export default Clients;
