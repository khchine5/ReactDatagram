import * as React from "react";
import { List, Datagrid, TextField,Show, SimpleShowLayout, DateField  } from 'react-admin';

const listProduct = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="barcode" />
            <TextField source="name" />
            <TextField source="store" />
        </Datagrid>
    </List>
);

const ProductShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="barcode" />
            <TextField source="store" />
            <DateField label="Publication date" source="createdDatatime" />
        </SimpleShowLayout>
    </Show>
);
export {listProduct,ProductShow}