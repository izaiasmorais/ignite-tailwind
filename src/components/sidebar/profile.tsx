import { LogOut } from "lucide-react";

export function Profile() {
	return (
		<div className="flex items-center gap-3">
			<img
				src="https://github.com/izaiasmorais.png"
				alt="Izaías Lima"
				className="rounded-full w-10 h-10"
			/>

			<div className="truncate flex flex-1 flex-col ">
				<span className="text-sm font-semibold text-zinc-700">Izaías Lima</span>
				<span className="truncate text-sm text-zinc-500">
					izaiaslima356@gmail.com
				</span>
			</div>

			<button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
				<LogOut className="w-5 h-5 text-zinc-500" />
			</button>
		</div>
	);
}
