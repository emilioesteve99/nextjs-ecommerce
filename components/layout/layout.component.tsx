import React from "react";
import LayoutAppBarComponent from "./components/app-bar/layout-app-bar.component";
import LayoutMenuComponent from "./components/menu/layout-menu.component";

export type LayoutComponentPropsType = {
    children?: React.ReactElement | React.ReactElement[];
}

function LayoutComponent(props: LayoutComponentPropsType) {
    return (
        <>
            <div>
                <LayoutAppBarComponent />
                <LayoutMenuComponent />
            </div>
            {props.children}
        </>
    )
}

export default LayoutComponent;