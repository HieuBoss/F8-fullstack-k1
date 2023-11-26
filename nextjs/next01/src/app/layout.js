import "./layout.css";

export const metadata = {
  title: "Buổi đầu tiên của nextjs",
  description: "Học nextjs khó",
  keywords: "Học mới được đi làm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
