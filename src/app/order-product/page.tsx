"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order Place");
    router.push("/products");
    // router.back();
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order</button>
    </div>
  );
}
