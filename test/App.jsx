import * as t from '../'
import { SimpleShowLayout, Admin, Resource, Datagrid } from 'react-admin'
import '../fields.css'

const record = {
  company_name: 'Vasilisa',
  date: new Date(),
  description: 'This is some sort of description',
  gender: 'F',
  id: 33,
  incoterm: 'FOB',
  port: 'Shanghai',
  customer_id: 1,
  min_quantity: 23500,
  orders_count: 22,
  owner_id: 1,
  inner_packing_count: 5,
  inner_per_outer: 20,
  inner_packing: 'polybag',
  payment_term: 'ADV',
  unit_price: 33.4,
  product_id: 'KH-0988',
  total_amount: 888888,
  total_items: 5656,
  total_price: 88.8,
  proposals_count: 8

}
const getList =(resource, params) => new Promise((resolve, reject) => {
  let re;
  if (resource === 'customers') re = {
    data: [{id:1, company_name: "A company Name"}] }
  else if (resource === 'projects') re = {
    data: [{id:1, title: "Build a Super Cool Future"}] }
  else if (resource === 'products') re = {
    data: [{id: record.product_id, title: "Super Cheese Bike"}] }
  else re = { data: [] };
  resolve(re)
});

const dataProvider = {
 getList, getMany: getList  
}

export function Layout(){
  return <div style={{display: 'flex', flexDirection: 'row'}}>
    <SimpleShowLayout record={record}>
      <t.CompanyNameField />
      <t.CustomerReferenceField />
      <t.DateField />
      <t.DescriptionField />
      <t.GenderSelectField />
      <t.IDField />
      <t.IncotermField />
      <t.IncotermPortField />
      <t.MinQuantityField />
      <t.NrField />
      <t.OrdersCountField />
      <t.OwnerField />
      <t.PackageField />
      <t.PaymentSelectField />
      <t.PaymentTermReferenceField />
    </SimpleShowLayout>
    <SimpleShowLayout record={record}>
      <t.PriceField />
      <t.ProductImageField />
      <t.ProductImagesField />
      <t.ProductReferenceImageField />
      <t.ProjectReferenceField />
      <t.ProjectStatusField />
      <t.ProposalsCountField />
      <t.QuantityField />
      <t.SelectMUField />
      <t.SKUField />
      <t.TitleField />
      <t.TotalAmountField />
      <t.TotalItemsField />
      <t.TotalPriceField />
      <t.UnitPriceField />
    </SimpleShowLayout>
  </div>
}

export function Grids() {
  return <>
    <h1>Lists</h1>
    <Datagrid data={[record]} sort={false}>
      <t.CompanyNameField />
      <t.CustomerReferenceField />
      <t.DateField />
      <t.DescriptionField />
      <t.GenderSelectField />
    </Datagrid>
    <Datagrid data={[record]} sort={false}>
      <t.IDField />
      <t.IncotermField />
      <t.IncotermPortField />
      <t.MinQuantityField />
      <t.NrField />
      <t.OrdersCountField />
      <t.OwnerField />
      <t.PackageField />
    </Datagrid>
  </>
}

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource name="show" list={Layout} />
    <Resource name="list" list={Grids} />
    <Resource name="customers" recordRepresentation={r => r.company_name} />
    <Resource name="products" recordRepresentation={r => `${r.id}: ${r.title}`} />
    <Resource name="projects" recordRepresentation={r => `${r.id}: ${r.title}`} />
  </Admin>
}