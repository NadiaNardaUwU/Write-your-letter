import "./globals.css";

export const metadata = {
  title: "Write Your Letter",
  description: "Send a beautiful digital letter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}



