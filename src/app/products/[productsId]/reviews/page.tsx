import { Metadata } from "next";

type Props = {
  params: {
    productsId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product Review of ${params.productsId}`,
  };
};

export default function Reviews({ params }: Props) {
  return <h1>Product {params.productsId} review Page</h1>;
}
