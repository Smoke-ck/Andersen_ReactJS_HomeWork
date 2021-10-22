import { useState, useEffect } from "react";
import { getProduct } from "../api";

export default function useDetailsProductPage(id) {
    const [details, setDetails] = useState({})

    useEffect(()=> fetchUser() ,[id])

    function fetchUser() {
        getProduct(id).then(data => setDetails(data))
    }
    return  { details, fetchUser };
}