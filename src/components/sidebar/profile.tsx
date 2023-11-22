import { LogOut } from "lucide-react";
import { Button } from "../button";

export function Profile() {
	return (
		<div className="flex items-center gap-3">
			<img
				src="https://github.com/izaiasmorais.png"
				alt="Izaías Lima"
				className="rounded-full w-10 h-10"
			/>

			<div className="truncate flex flex-1 flex-col ">
				<span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
					Izaías Lima
				</span>
				<span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
					izaiaslima356@gmail.com
				</span>
			</div>

			<Button variant="ghost" type="button">
				<LogOut className="w-5 h-5 text-zinc-500" />
			</Button>
		</div>
	);
}
