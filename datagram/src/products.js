import * as React from "react";
import { List, Datagrid, TextField,Show, SimpleShowLayout, DateField, ChipField,NumberInput,ReferenceArrayField  } from 'react-admin';
import {EditButton,  Create,Edit, SimpleForm, TextInput, DateTimeInput ,BooleanInput,BooleanField, NumberField,required,  RichTextField, SingleFieldList, ReferenceArrayInput, SelectArrayInput} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { Filter } from 'react-admin';

const ListProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by name" source="name" alwaysOn />
        <NumberInput label="Min price" source="min_price" alwaysOn />
        <NumberInput label="Max price" source="max_price" alwaysOn />
        <DateField label="Start date" source="date_after" alwaysOn />
        <DateField label="End date" source="date_before" alwaysOn />
        <ReferenceArrayInput label="Stores" source="stores" reference="store">
                <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
    </Filter>
);


export const listProduct = (props) => (
    <List {...props} filters={<ListProductFilter />}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="barcode" />
            <NumberField source="price"  options={{ style: 'currency', currency: 'EUR' }} />
            <RichTextField source="description" />
            <ReferenceArrayField label="Stores" reference="store" source="stores">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <DateField label="Publication date" source="createdDatatime" />
            <DateField  source="lastModified" />
            <BooleanField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="barcode" />
            <DateField label="Publication date" source="createdDatatime" />
            <DateField  source="lastModified" />
        </SimpleShowLayout>
    </Show>
);

export const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="barcode" validate={required()} />
            <NumberInput source="price" locales="fr-FR" />
            <RichTextInput source="description" />
            <BooleanInput source="active" />
            <TextInput source="sequence" validate={required()} />
            <ReferenceArrayInput label="Stores" source="stores" reference="store">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <DateTimeInput disabled source="createdDatatime" />
            <DateTimeInput disabled source="lastModified" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="barcode" validate={required()} />
            <RichTextInput source="description" />
            <BooleanInput source="active" />
            <TextInput source="sequence" validate={required()} />
            <ReferenceArrayInput label="Stores" source="stores" reference="store">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);