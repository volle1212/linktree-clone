import "../styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className={`h-screen bg-[url('../public/muster/phone.jpg')] sm:bg-[url('../public/muster/1.jfif')] bg-no-repeat bg-cover`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
