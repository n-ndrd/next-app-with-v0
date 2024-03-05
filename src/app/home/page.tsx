"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PageHome() {
	const router = useRouter();

	return <Button onClick={() => router.push("/app")}>Click here</Button>;
}
