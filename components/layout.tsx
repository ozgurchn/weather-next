import Header from "./header";
import Footer from "./footer";
import styles from "styles/Home.module.css";
import React from "react";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
