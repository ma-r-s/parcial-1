"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://65f06939da8c6584131ba8aa.mockapi.io/api/parts")
			.then((res) => res.json())
			.then((result) => {
				setPosts(result);
			});
	}, []);
	return (
		<>
			<div className="flex justify-evenly w-full items-center">
				<div>
					<Link href="/profile">
						<img className=" aspect-square w-96 p-10 overflow-hidden rounded-full" src={posts[0].image} width={500} height={500} alt="Profile Pic" />
					</Link>
				</div>
				<div className="py-8">
					<div className="text-3xl md:text-5xl md:mb-6 mb-2">username</div>
					<div className="md:text-xl">
						<span className="font-bold">Firstame Lastname</span>
						<span> Proin at lacullis arcu. Proin in ml md dolor liquet facilisis</span>
					</div>
					<div className="text-blue-400 md:text-xl mb-2 md:mb-6">website.com</div>
					<div className="flex gap-4   md:text-xl">
						<div>
							<span className="font-bold">870 </span>
							<span className="">posts</span>
						</div>
						<div>
							<span className="font-bold">496 </span>
							<span className="">followers</span>
						</div>
						<div>
							<span className="font-bold">112 </span>
							<span className="">following</span>
						</div>
					</div>
				</div>
			</div>
			<div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-12">
				{[...Array(12)].map((_, index) => (
					<Dialog key={index}>
						<DialogTrigger>
							<img className="aspect-square overflow-hidden" src="https://picsum.photos/350" width={500} height={500} alt="Profile Pic" />
						</DialogTrigger>
						<DialogContent>
							<img className="" src="https://picsum.photos/350" width={500} height={500} alt="Profile Pic" />
						</DialogContent>
					</Dialog>
				))}
			</div>
		</>
	);
}
