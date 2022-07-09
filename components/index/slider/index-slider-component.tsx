import Image from 'next/image';
import styles from './index-slider.module.css';

function IndexSliderComponent() {
    return (
        <div className={styles.index_slider}>
            <Image
                src={"/index-main.jpg"}
                alt='iphone'
                layout='fill'
                objectFit='contain'
                className={styles.index_slider_image}
            />
        </div>
    )
}

export default IndexSliderComponent;