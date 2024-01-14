export default function ReviewsDetails({
  params,
}: {
  params: {
    productsId: string;
    reviewsId: string;
  };
}) {
  return (
    <h1>
      Review {params.reviewsId} this product of {params.productsId}
    </h1>
  );
}
