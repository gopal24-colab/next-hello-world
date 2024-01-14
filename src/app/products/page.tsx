import Link from "next/link";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `All Products`,
  };
};
export default function Products() {
  return (
    <>
      <h1>Products List</h1>
      <ul>
        <li>
          <Link href="products/1">Product 1</Link>
        </li>
        <li>
          <Link href="products/2">Product 2</Link>
        </li>
        <li>
          <Link href="products/3">Product 3</Link>
        </li>
      </ul>
    </>
  );
}
