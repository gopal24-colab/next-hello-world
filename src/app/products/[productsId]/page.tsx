import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: {
    productsId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productsId}`);
    }, 1000);
  });
  return {
    title: `${title}`,
  };
};

export default function ProductsDetails({ params }: Props) {
  return (
    <>
      <h1>Products details of --- {params.productsId}</h1>
      <h1>Reviews</h1>
      <ul>
        <li>
          <Link href={`/products/${params.productsId}/reviews/${1}`}>
            Reviews 1
          </Link>
        </li>
      </ul>
    </>
  );
}
