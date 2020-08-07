import * as React from "react";
import { List, Datagrid, TextField,Show, SimpleShowLayout, DateField, ReferenceField,ReferenceInput  } from 'react-admin';
import { Create,Edit, SimpleForm, TextInput, DateInput , required, SelectInput} from 'react-admin';


export const listProduct = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="barcode" />
            <TextField source="name" />
            <ReferenceField label="Store" source="store" reference="store">
                <TextField source="name" />
            </ReferenceField>
            <DateField label="Publication date" source="createdDatatime" />
        </Datagrid>
    </List>
);

export const ProductShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="barcode" />
            <TextField source="sequence" validate={required()} />
            <DateField label="Publication date" source="createdDatatime" />
        </SimpleShowLayout>
    </Show>
);

export const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="barcode" validate={required()} />
            <TextInput source="sequence" validate={required()} />
            <DateInput label="createdDatatime" source="published_at" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="barcode" validate={required()} />
            <TextInput source="sequence" validate={required()} />
            <DateInput label="createdDatatime" source="published_at" />
            <ReferenceInput label="Store" source="store" reference="store">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);