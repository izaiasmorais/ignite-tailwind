"use client";
import { User } from "lucide-react";
import { useFileInput } from "./root";
import { useMemo } from "react";

export function ImagePreview() {
	const { files } = useFileInput();

	const previewUrl = useMemo(() => {
		if (files.length === 0) {
			return null;
		}

		return URL.createObjectURL(files[0]);
	}, [files]);

	if (previewUrl === null) {
		return (
			<div className="bg-violet-50 flex h-16 w-16 justify-center items-center rounded-full">
				<User className="w-8 h-8 text-violet-500" />
			</div>
		);
	} else {
		return (
			<img
				src={previewUrl}
				alt=""
				className="w-16 h-16 rounded-full object-cover"
			/>
		);
	}
}
