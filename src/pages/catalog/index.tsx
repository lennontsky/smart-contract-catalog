import type { FC } from 'react';
import React from 'react';
import {
    Accordion,
    AccordionItem,
    Box,
    Button,
    ButtonGroup,
    Breadcrumbs,
    BreadcrumbsItem,
    Card,
    Cell,
    Column,
    Grid,
    GridItem,
    Heading,
    Row,
    TextField,
    Link,
    Stack,
    Table,
    Text,
    Tile,
    TableBody,
    TableHeader, Divider, Pagination,
} from '@kadena/kode-ui';
import {MonoSearch} from "@kadena/kode-icons/system";

// Example of using map() to render a list of items in a Next.js component
const contracts = [
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
    { name: "Nome do Contrato", description: "Descrição do Contrato" },
];

function ContractCard() {
    return (
        <div className="atoms_backgroundColor_semantic.warning.default__ohxicf1p atoms_borderColor_base.boldest__ohxicf2i atoms_borderStyle_solid__ohxicf3m atoms_borderWidth_hairline__ohxicf3n atoms_width_100%__ohxicf7q">
            <Stack
                alignItems="flex-start"
                className="atoms_backgroundColor_semantic.positive.default__ohxicf19 atoms_color_text.semantic.positive.default__ohxicf5t atoms_borderColor_base.boldest__ohxicf2i atoms_borderStyle_solid__ohxicf3m atoms_borderWidth_hairline__ohxicf3n"
                flexDirection="row"
                flexWrap="wrap"
                gap="md"
                justifyContent="flex-start"
            >
                
            {contracts.map((contract) => (

                <Stack as="div" flexDirection="column" justifyContent="space-between">
                    <Tile as="button" onClick={() => {}}>
                        
                            <Heading as="h5">
                                {contract.name}
                            </Heading>
                        <space></space>
                            <Text>
                                {contract.description}
                            </Text>
                           
                    </Tile>
                </Stack>
            ))}
            </Stack>
        </div>
    );
}

function ContractTags(){
    return (
    <TagGroup>
        <$c1d7fb2ec91bae71$var$Item>
            News
        </$c1d7fb2ec91bae71$var$Item>
        <$c1d7fb2ec91bae71$var$Item>
            Travel
        </$c1d7fb2ec91bae71$var$Item>
        <$c1d7fb2ec91bae71$var$Item>
            Gaming
        </$c1d7fb2ec91bae71$var$Item>
        <$c1d7fb2ec91bae71$var$Item>
            Shopping
        </$c1d7fb2ec91bae71$var$Item>
    </TagGroup>);
}

function SearchBar(){
    return(
        <div>
            <TextField
                description=""
                direction="row"
                errorMessage=""
                fontType="ui"
                info=""
                label="Search Contracts"
                onValueChange={() => {}}
                placeholder="Search"
                size="sm"
                startVisual={<MonoSearch />}
                tag=""
                value=""
                variant="default"
            />
            <Divider />
        </div>)
}
const Catalog: FC = () => {
    return( <>
        <SearchBar></SearchBar>
        <ContractCard></ContractCard>
        <Pagination
            defaultSelectedPage={2}
            onPageChange={() => {}}
            totalPages={10}
            visiblePageLimit={3}
        />
    </>);
};

export default Catalog;