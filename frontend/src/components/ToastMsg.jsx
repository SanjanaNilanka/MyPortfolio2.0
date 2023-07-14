import React from 'react'
import './toast-msg.css'

export default function ToastMsg(props) {
    const toastMsg = props.msg

    return (
        <div>
            <div class="notification">
                <p>{toastMsg}</p>
                <span class="notification__progress"></span>
            </div>
        </div>
    )
}