"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
export default function Home() {
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch("https://65f06939da8c6584131ba8aa.mockapi.io/api/parts")
			.then((res) => res.json())
			.then((result) => {
				const randomIndex = Math.floor(Math.random() * 100);
				setPost(result[randomIndex]);
			});
	}, []);

	return (
		<>
			{post && (
				<div className="flex justify-evenly w-full items-center gap-4 p-12  sm:pt-16">
					<Link className="min-w-28 sm:min-w-48" href="/profile">
						<img className=" max-h-64 rounded-full aspect-square overflow-hidden h-full" src={post.image} alt="Profile Pic" />
					</Link>

					<div className="max-w-3xl p-2 text-sm sm:text-base md:text-xl">
						<div className="text-xl sm:text-3xl md:text-5xl md:mb-6 mb-2">{post.username}</div>
						<div className="md:text-xl line-clamp-3">
							<span className="font-bold">{post.name} </span>
							<span>{post.description}</span>
						</div>
						<Link href="https://www.instagram.com/mars.mars._/" className="text-blue-400  mb-2 md:mb-6">
							{post.website}.com
						</Link>
						<div className="flex gap-4 md:text-xl">
							<div className="flex-shrink">
								<span className="font-bold">
									<span className="">{post.post}</span>
								</span>
								<span className=""> posts</span>
							</div>
							<div className="flex-shrink">
								<span className="font-bold">
									<span className="">{post.followers}</span>
								</span>
								<span className=""> {post.title}</span>
							</div>
							<div className="flex-shrink">
								<span className="font-bold">{post.following}</span>
								<span className=""> following</span>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="sm:pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-12">
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
