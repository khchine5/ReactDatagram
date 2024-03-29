import * as React from "react";
import { List, Datagrid, TextField,Show, SimpleShowLayout, DateField, ReferenceField,ReferenceInput  } from 'react-admin';
import { EditButton, Create,Edit, SimpleForm, TextInput, DateInput , required, SelectInput} from 'react-admin';
import { Filter } from 'react-admin';

const ListStoreFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);


export const listStore = (props) => (
    <List {...props} filters={<ListStoreFilter />}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <ReferenceField label="Chain" source="chain" reference="chain">
                <TextField source="name" />
            </ReferenceField>
            <DateField label="Publication date" source="createdDatatime" />
            <DateField  source="lastModified" />
            <EditButton />
        </Datagrid>
    </List>
);

export const StoreShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="sequence" validate={required()} />
            <ReferenceField label="Chain" source="chain" reference="chain">
                <TextField source="name" />
            </ReferenceField>
            <DateField label="Publication date" source="createdDatatime" />
        </SimpleShowLayout>
    </Show>
);

export const StoreEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="address" validate={required()} />
            <TextInput source="sequence" validate={required()} />
            <ReferenceInput label="Chain" source="chain" reference="chain">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput disabled label="createdDatatime" source="createdDatatime"  />
        </SimpleForm>
    </Edit>
);

export const StoreCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="address" validate={required()} />
            <TextInput source="sequence" validate={required()} />
            <DateInput label="createdDatatime" source="createdDatatime" />
            <ReferenceInput label="Chain" source="chain" reference="chain">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);