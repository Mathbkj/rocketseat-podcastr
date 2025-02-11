'use client'
import { useParams } from "next/navigation"

export default function Episode() {
    const params = useParams();
    return <h1>{params.id}</h1>
}