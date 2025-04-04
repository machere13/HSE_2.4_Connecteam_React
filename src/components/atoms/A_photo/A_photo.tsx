import styles from './A_photo.module.css'
import { StaticImageData } from 'next/image';
import Image from 'next/image';

export interface A_photo_Props {
    src: string | StaticImageData;
    alt: string;
};

export default function A_photo({ src, alt }: A_photo_Props) {
    return (
        <div className={styles.wrapper}>
            <Image
                src={src}
                alt={alt}
            />
        </div>
    );
}