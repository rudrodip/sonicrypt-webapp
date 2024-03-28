"use client"

import { ReactNode, useEffect, useState } from "react"

export const ClientOnly = ({ children }: { children: ReactNode }) => {
    const [clientReady, setClientReady] = useState(false)

    useEffect(() => {
        setClientReady(true)
    }, [])

    return clientReady ? <>{children}</> : null
}