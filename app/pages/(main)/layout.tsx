export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <h1>진행중인 상품</h1>
      {children}
    </div>
  );
}
