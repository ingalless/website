import Head from "next/head";

interface LayoutInterface {
  title: string;
  description?: string;
}
const Layout: React.FC<LayoutInterface> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default Layout;
