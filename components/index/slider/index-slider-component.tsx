import Image from 'next/image';
import styles from './index-slider.module.css';

function IndexSliderComponent() {
    return <div className={styles.index_slider}>
        <Image
            src={"/index-main.jpg"}
            width="100%"
            height="100%"
            alt='iphone'
        />
    </div>
}

export default IndexSliderComponent;