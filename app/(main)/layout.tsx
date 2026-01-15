import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
