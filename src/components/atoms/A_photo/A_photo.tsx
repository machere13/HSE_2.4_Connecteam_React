import styles from './A_Photo.module.css'
import Image, { StaticImageData } from 'next/image';

export interface A_PhotoProps {
    src: string | StaticImageData;
    alt: string;
};

export default function A_Photo({ src, alt }: A_PhotoProps) {
    return (
        <div className={styles.wrapper}>
            <Image
                src={src}
                alt={alt}
            />
        </div>
    );
}