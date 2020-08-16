import * as React from "react";
import { List, Datagrid, TextField,Show, SimpleShowLayout, DateField,   } from 'react-admin';
import { EditButton,Create,Edit, SimpleForm, TextInput, DateInput , required, } from 'react-admin';
import { Filter } from 'react-admin';
import Button from '@material-ui/core/Button';
import { TopToolbar, ShowButton } from 'react-admin';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNotify, useRedirect, fetchEnd} from 'react-admin';
import {mainHost } from './utils';

const ListChainFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);

const ChainEditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ShowButton basePath={basePath} record={data} />
        {/* Add your custom actions */}
        <Button color="primary" onClick={console.log('test')}>Custom Action</Button>
    </TopToolbar>
);

const ScapingAction = ({ record }) => {
    const dispatch = useDispatch();
    const redirect = useRedirect();
    const notify = useNotify();
    const token = localStorage.getItem('token');
    const myHeaders = {
        'Authorization':`Token ${token}`,
      };
    const [loading, setLoading] = useState(false);
    console.log(mainHost);
    const handleClick = () => {
        fetch(mainHost + `/api/chain/${record.id}/do_scrap_website`, { method: 'GET' ,headers: myHeaders},)
            .then(response  => {
                const count = response.status ;
                console.log(response);
                notify(`Products has been scraped`);
                redirect('/product');
            })
            .catch((e) => {
                notify('Error: scraping error', 'warning')
            })
            .finally(() => {
                setLoading(false);
                dispatch(fetchEnd()); // stop the global loading indicator
            });
    };
    return <Button label="Scrap" color="primary" onClick={handleClick} disabled={loading}>Scrap products</Button>;
};
export const listChain = (props) => (
    <List {...props} filters={<ListChainFilter />}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <DateField label="Publication date" source="createdDatatime" />
            <DateField  source="lastModified" />
            <ScapingAction />
            <EditButton />
        </Datagrid>
    </List>
);

export const ChainShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="sequence" validate={required()} />
            <DateField label="Publication date" source="createdDatatime" />
        </SimpleShowLayout>
    </Show>
);

export const ChainEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="address" validate={required()} />
            <TextInput source="sequence" validate={required()} />
            <DateInput label="createdDatatime" source="published_at" />
        </SimpleForm>
    </Edit>
);

export const ChainCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="address" validate={required()} />
            <TextInput source="sequence" validate={required()} />
            <DateInput label="createdDatatime" source="published_at" />
        </SimpleForm>
    </Create>
);