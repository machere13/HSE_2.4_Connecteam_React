import styles from './A_photo.module.css'

export interface A_photo_Props {
    src: string;
    alt: string;
};

export default function A_photo({ src, alt }: A_photo_Props) {
    return (
        <div className={styles.wrapper}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
}