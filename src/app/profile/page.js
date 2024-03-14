import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Profile() {
	return (
		<div className="mx-auto flex h-screen items-center justify-center bg-zinc-600">
			<div className=" w-80 borde rounded-xl border flex flex-col items-center p-4 gap-3 bg-white">
				<img className=" aspect-square w-20 overflow-hidden rounded-full" src="https://picsum.photos/350" alt="Profile Pic" />
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">Nombre de Usuario</Label>
					<Input type="email" id="email" placeholder="Username" />
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">Nombre Completo</Label>
					<Input type="email" id="email" placeholder="Nombre Completo" />
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">Descripcion del perfil</Label>
					<Input type="email" id="email" placeholder="Descripcion del perfil" />
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">URL pagina personal</Label>
					<Input type="email" id="email" placeholder="URL pagina personal" />
				</div>
			</div>
		</div>
	);
}
