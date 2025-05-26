import styles from "./T_ErrorPage.module.css";
import W_ErrorBlock from "@/components/wrappers/W_ErrorBlock/W_ErrorBlock";
import SO_Header from "@/components/super-organisms/SO_Header/SO_Header";
import O_Footer from "@/components/organisms/O_Footer/O_Footer";

interface ErrorTemplateProps {
  errorType?: "403" | "404" | "418" | "500" | "502" | "505";
  homeUrl?: string;
}

export const T_ErrorPage = ({
  errorType = "404",
  homeUrl = "/",
}: ErrorTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <SO_Header />
      <W_ErrorBlock errorType={errorType} homeUrl={homeUrl} />
      <O_Footer />
    </div>
  );
};