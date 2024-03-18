"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Profile() {
	const [post, setPost] = useState(null);
	const [editable, setEditable] = useState(false);

	useEffect(() => {
		fetch("https://65f06939da8c6584131ba8aa.mockapi.io/api/parts")
			.then((res) => res.json())
			.then((result) => {
				const randomIndex = Math.floor(Math.random() * result.length);
				setPost(result[randomIndex]);
			});
	}, []);

	useEffect(() => {
		const randomValue = Math.random();
		setEditable(randomValue < 0.5);
	}, []);

	return (
		<div className="mx-auto flex h-screen items-center justify-center bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
			{post && (
				<div className="w-80 border rounded-xl border flex flex-col items-center p-4 gap-3 bg-white">
					<img className="aspect-square w-20 overflow-hidden rounded-full" src={post.image} alt="Profile Pic" />
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="username">Nombre de Usuario</Label>
						{editable ? <Input type="text" id="username" placeholder={post.username} /> : <p className="font-light">{post.username}</p>}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="fullname">Nombre Completo</Label>
						{editable ? <Input type="text" id="fullname" placeholder={post.name} /> : <p className="font-light">{post.name}</p>}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="description">Descripcion del perfil</Label>
						{editable ? <Input type="text" id="description" placeholder={post.description} /> : <p className="font-light">{post.description}</p>}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="url">URL pagina personal</Label>
						{editable ? <Input type="text" id="url" placeholder={post.website} /> : <p className="font-light">{post.website}.com</p>}
					</div>
					{editable ? <Button>Guardar Cambios</Button> : <></>}
				</div>
			)}
		</div>
	);
}

export default Profile;
