import { Suspense } from "react";
import ProductLists from "../components/ProductLists";

export const metadata = {
  title: "Danh sách sản phẩm",
};
// http://localhost:3001/san-pham?keywords=50&status=active
const Products = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <ProductLists />
    </Suspense>
  );
};
export default Products;
