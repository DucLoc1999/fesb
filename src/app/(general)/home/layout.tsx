import { Footer } from "@/components/footer/Footer";
import Header from "@/components/Layout/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <title>The Alchemist - Home</title>
      <section>
        <Header />
        <div>{children}</div>
        <Footer />
      </section>
    </div>
  );
}
