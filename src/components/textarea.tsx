import { ComponentProps } from "react";

export interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(prop: TextAreaProps) {
	return (
		<textarea
			{...prop}
			id="bio"
			className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-3 px-3 py-2 shadow-sm
			focus:border-violet-300 focus:ring-4 focus:ring-violet-100 outline-none
			dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500
			dark:focus-within:ring-violet-500/20 dark:text-zinc-100 dark:placeholder-zinc-400"
		/>
	);
}
