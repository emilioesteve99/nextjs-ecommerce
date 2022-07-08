import LayoutCartComponent from './components/cart/layout-cart.component';
import LayoutLoginLinkComponent from './components/login-link/layout-login-link.component';
import LayoutLogoComponent from './components/logo/layout-logo.component';
import LayoutSearchInputComponent from './components/search-input/layout-search-input.component';
import LayoutWishlistLinkComponent from './components/wishlist/layout-wishlist-link.component';
import styles from './layout-app-bar.module.css';

function LayoutAppBarComponent() {
    return (
        <section className={styles.layout_appbar}>
            <div className={styles.layout_appbar_left}>
                <LayoutLogoComponent />
                <LayoutSearchInputComponent />
            </div>
            <div className={styles.layout_appbar_right}>
                <LayoutLoginLinkComponent />
                <LayoutWishlistLinkComponent />
                <LayoutCartComponent />
            </div>
        </section>
    )
}

export default LayoutAppBarComponent;