"use client";
import {
	ComponentProps,
	createContext,
	useContext,
	useId,
	useState,
} from "react";

export type RootProps = ComponentProps<"div">;

type FileInputContextPrips = {
	id: string;
	files: File[];
	onFilesSeleced: (file: File[]) => void;
};

const FileInputContext = createContext({} as FileInputContextPrips);

export function Root(props: RootProps) {
	const id = useId();
	const [files, setFiles] = useState<File[]>([]);

	return (
		<FileInputContext.Provider
			value={{ id: id, files, onFilesSeleced: setFiles }}
		>
			<div {...props} />
		</FileInputContext.Provider>
	);
}

export const useFileInput = () => useContext(FileInputContext);
