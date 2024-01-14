export default function Docs({
  params,
}: {
  params: {
    slag: string[];
  };
}) {
  return (
    <>
      {params.slag?.length === 2 ? (
        <h1>
          This is {params.slag[1]} of {params.slag[0]}
        </h1>
      ) : params.slag?.length === 1 ? (
        <h1>This is {params.slag[0]}</h1>
      ) : (
        <h1>Docs Home Page</h1>
      )}
    </>
  );
}
