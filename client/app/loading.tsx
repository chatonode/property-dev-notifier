'use client'

import OverlayPortal from './components/UI/Overlay/OverlayPortal'
import classes from './loading.module.css'

const RootLoading = () => {
    return (
        <OverlayPortal>
            <div className={classes.blob}></div>
        </OverlayPortal>
    )
}

export default RootLoading