import Link from "next/link";
import styles from "./W_ErrorBlock.module.css";
import Q_ErrorCode from "@/components/quarks/Q_ErrorCode/Q_ErrorCode";
import Q_ErrorSignature from "@/components/quarks/Q_ErrorSignature/Q_ErrorSignature";

interface W_ErrorBlockProps {
  errorType: "403" | "404" | "418" | "500" | "502" | "505";
  homeUrl?: string;
  onClose?: () => void;
}

export default function W_ErrorBlock({
  errorType = "404",
  homeUrl = "/",
  onClose,
}: W_ErrorBlockProps) {
  return (
    <div className={styles.wrapper}>
      <Q_ErrorCode errorType={errorType} />
      <Q_ErrorSignature errorType={errorType} />
      
      <Link 
        href={homeUrl} 
        className={styles.homeButton}
        onClick={onClose}
      >
        Вернуться на главную
      </Link>
    </div>
  );
}