import Link from "next/link";
import styles from './layout-menu.module.css';

function LayoutMenuComponent() {
    const categories: {
        id: number;
        name: string;
        link: string;
    }[] = [
            {
                id: 1,
                name: 'Shop All',
                link: '/category'
            },
            {
                id: 2,
                name: 'Phones',
                link: '/category'
            },
            {
                id: 3,
                name: 'Computers',
                link: '/category'
            },
            {
                id: 4,
                name: 'Tablets',
                link: '/category'
            },
            {
                id: 5,
                name: 'Drones',
                link: '/category'
            },
            {
                id: 6,
                name: 'Cameras',
                link: '/category'
            },
        ]

    return (
        <nav className={styles.layout_menu}>
            {categories.map(cateogory => {
                return (
                    <Link href={cateogory.link} key={cateogory.id.toString()}>
                        <a>{cateogory.name}</a>
                    </Link>
                )
            })}
        </nav>
    )
}

export default LayoutMenuComponent