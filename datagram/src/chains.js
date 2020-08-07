import * as React from "react";
import { List, Datagrid, TextField,Show, SimpleShowLayout, DateField, ReferenceField,ReferenceInput  } from 'react-admin';
import { EditButton,Create,Edit, SimpleForm, TextInput, DateInput , required, SelectInput} from 'react-admin';


export const listChain = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <DateField label="Publication date" source="createdDatatime" />
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