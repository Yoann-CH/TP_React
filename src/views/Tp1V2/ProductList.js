import { products } from "../../components/ProductList";
import ListContainer from "../../components/ListContainer";

function ProductItem({ item }) {
  return (
    <div>
      {item.name} - {item.price}€ -
    </div>
  );
}

export default function Cart() {
  return (
    <>
      <h1>Products</h1>
      <ListContainer
        initialItems={products}
        ListItem={ProductItem}
        availableActions={{}}
      />
    </>
  );
}
