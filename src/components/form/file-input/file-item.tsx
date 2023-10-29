import { Button } from "@/components/button";
import { formatBytes } from "@/utils/format-bytes";
import { UploadCloud, Trash2, CheckCircle2 } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const fileItem = tv({
	base: "group flex items-center gap-4 rounded-lg border border-zinc-200 p-4",

	variants: {
		state: {
			progress: "",
			complete: "",
			error: "",
		},
	},

	defaultVariants: {
		state: "progress",
	},
});

export interface FileItemProps extends VariantProps<typeof fileItem>{
	name: string;
	size: number;
}

export function FileItem({ name, size, state }: FileItemProps) {

	return (
		<div className={fileItem({state})}>
			<div
				className="rounded-full border-4 border-violet-100 bg-violet-200 p-2
						text-violet-600"
			>
				<UploadCloud className="h-4 w-4" />
			</div>

			{state === "error" ? (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-error-700">
							Upload Failed! Please try again
						</span>
						<span className="text-sm text-error-600">{name}</span>
					</div>

					<button className="text-sm font-semibold text-error-700 hover:text-error-900">
						Trye again
					</button>
				</div>
			) : (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-zinc-700">{name}</span>
						<span className="text-sm text-zinc-500">{formatBytes(size)}</span>
					</div>

					<div className="flex w-full items-center gap-3 ">
						<div className="h-2 flex-1 rounded-full bg-zinc-100">
							<div
								className="h-2 rounded-full w-4/5 bg-violet-600"
								style={{ width: state === "complete" ? "100%" : "80%" }}
							/>
						</div>
						<span className="text-sm font-medium text-zinc-700">
							{state === "complete" ? "100%" : "80%"}
						</span>
					</div>
				</div>
			)}

			{state === "complete" ? (
				<CheckCircle2 className="w-5 h-5 fill-violet-600 text-white" />
			) : (
				<Button type="button" variant="ghost">
					<Trash2 className="w-5 h-5 text-zinc-500" />
				</Button>
			)}
		</div>
	);
}
