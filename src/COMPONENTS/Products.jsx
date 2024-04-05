import { items } from "../DATA/data";
import Container from "../UI/Container";
import Product from "./Product";
import Styles from "./Products.module.css";
function Products() {
  return (
    <Container>
      <h3>BEST OF MANA_SHOP</h3>
      <div className={Styles.products}>
        {items.map((item) => {
          return <Product {...item} key={item.id} />;
        })}
      </div>
    </Container>
  );
}

export default Products;
