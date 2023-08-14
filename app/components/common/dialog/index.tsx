import styles from './dialog.module.css'

import { useRef, useEffect } from 'react'

type DialogProps = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
    showDialog: boolean
}

export default function Dialog({ showDialog ,title, onClose, onOk, children }: DialogProps) {

    const dialogRef = useRef<null | HTMLDialogElement>(null)

    useEffect(() => {
        if (showDialog === true) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    const dialog: JSX.Element | null = showDialog === true
        ? (
            <dialog ref={dialogRef} className={styles.dialog__container}>
                <div >
                    <div >
                        <h1>{title}</h1>
                        <button onClick={closeDialog}>x</button>
                    </div>
                    <div>
                        {children}
                        <div>
                            <button onClick={clickOk}>OK</button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null


    return dialog
}