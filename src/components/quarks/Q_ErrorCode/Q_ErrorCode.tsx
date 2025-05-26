import styles from "./Q_ErrorCode.module.css";
import Q_Icon from "../Q_Icon";

interface Q_ErrorCodeProps {
  errorType?: "403" | "404" | "418" | "500" | "502" | "505";
  width?: string;
  height?: string;
}

const iconSizes: Record<string, { width: string; height: string }> = {
    errorCode403Icon: { width: '368', height: '140' },
    errorCode404Icon: { width: '368', height: '140' },
    errorCode418Icon: { width: '235', height: '140' },
    errorCode500Icon: { width: '392', height: '140' },
    errorCode502Icon: { width: '358', height: '140' },
    errorCode505Icon: { width: '358', height: '140' },
};
  
export default function Q_ErrorCode({ errorType = "404" }: Q_ErrorCodeProps) {
    const iconName = `errorCode${errorType}Icon` as const;
    const size = iconSizes[iconName] || { width: 392, height: 140 };
  
    return (
      <div className={styles.wrapper}>
        <Q_Icon name={iconName} />
      </div>
    );
}