"use client";
import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./root";

export type ControlProps = ComponentProps<"input">;

export function Control(props: ControlProps) {
	const { id, onFilesSeleced } = useFileInput();

	function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
		if (!e.target.files?.length) {
			return;
		}

		const files = Array.from(e.target.files);

		onFilesSeleced(files);
	}

	return (
		<input
			id={id}
			type="file"
			className="sr-only"
			onChange={handleFilesSelected}
			{...props}
		/>
	);
}
