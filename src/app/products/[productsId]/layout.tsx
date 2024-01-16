export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h1>Featured Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          facere quas, obcaecati natus at in commodi hic distinctio molestiae
          quae aut dolore quidem, quia quo dicta reiciendis dolores unde!
          Corporis.
        </p>
      </body>
    </html>
  );
}
