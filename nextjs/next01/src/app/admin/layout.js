export const metadata = {
  title: "trang quan tri",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <header>
        <h1>ADMIN HEADER</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>ADMIN FOOTER</h1>
      </footer>
    </>
  );
}
