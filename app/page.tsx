"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Page = () => {
	//test comment
	const router = useRouter();
	const pathname = usePathname();
	console.log(router);
	console.log(pathname);
	return <div>Page</div>;
};
export default Page;
