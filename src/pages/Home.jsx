import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ROLE } from "../shared/constants";

export default function Home() {
    const auth = useSelector((state) => state.auth)
    const [role, setUserType] = useState('')

    useEffect(() => {
        setUserType(auth.user?.role)
    }, [auth])

    if (auth.isAuthenticated && role == ROLE.CUSTOMER ) {
        return (
            
        )
    }

    if (auth.isAuthenticated && role == ROLE.OWNER ) {
        return (

        )
    }

    return (

    )
}