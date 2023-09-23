import { ComponentProps } from "react";

export interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(prop: TextAreaProps) {
	return (
		<textarea
			{...prop}
			id="bio"
			className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-3 px-3 py-2 shadow-sm"
		/>
	);
}
