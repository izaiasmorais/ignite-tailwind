"use client";
import { UploadCloud } from "lucide-react";
import { useFileInput } from "./root";

export function Trigger() {
	const { id } = useFileInput();

	return (
		<label
			htmlFor={id}
			className="flex-1 group cursor-pointer flex flex-col items-center gap-3
								rounded-lg border	border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm
								hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
		>
			<div
				className="rounded-full w-fit border-[6px] border-zinc-50 bg-zinc-100 p-2
								group-hover:border-violet-50 group-hover:bg-violet-100"
			>
				<UploadCloud className="w-5 h-5 text-zinc-600 group-hover:text-violet-700" />
			</div>

			<div className="flex-col items-center gap-1">
				<span className="text-sm flex gap-1">
					<span className="font-semibold text-violet-700">Click to upload</span>
					or drag and drop
				</span>
				<span className="text-xs">SVG, PNG or GIF (max 800x400px)</span>
			</div>
		</label>
	);
}
