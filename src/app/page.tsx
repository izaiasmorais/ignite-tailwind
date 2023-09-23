import { SettingsTabs } from "@/components/settings-tabs";
import { InputControl, InputPrefix, InputRoot } from "@/components/input";
import {
	Bold,
	ChevronDown,
	Italic,
	Link,
	List,
	ListOrdered,
	Mail,
	UploadCloud,
	User,
} from "lucide-react";
import * as FileInput from "@/components/form/file-input";
import { Select } from "@/components/form/select";
import { SelectItem } from "@/components/form/select/select-item";
import { TextArea } from "@/components/textarea";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

			<SettingsTabs />

			<div className="mt-6 flex flex-col">
				<div className="flex items-center justify-between pb-5 border-b border-zinc-200">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo in personal details here
						</span>
					</div>

					<div className="flex items-center gap-2">
						<button
							type="button"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300
							text-zinc-700 hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							form="settings"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600
							text-white hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</div>

				<form
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
				>
					<div className="grid gap-3 grid-cols-form">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700"
						>
							Name
						</label>
						<div className="grid gap-6 grid-cols-2">
							<InputRoot>
								<InputControl
									id="firstName"
									defaultValue="Izaías"
								></InputControl>
							</InputRoot>

							<InputRoot>
								<InputControl defaultValue="Lima"></InputControl>
							</InputRoot>
						</div>
						<div />
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700"
						>
							Email
						</label>

						<InputRoot>
							<InputPrefix>
								<Mail className="w-5 h-5 text-zinc-500" />
							</InputPrefix>
							<InputControl
								id="email"
								defaultValue="izaiaslima356@gmail.com"
							></InputControl>
						</InputRoot>
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Your photo
							<span className="block mt-0.5 text-sm font-normal text-zinc-500">
								This will displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex items-start gap-5 ">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>

						<InputRoot>
							<InputControl id="role" defaultValue="Web Develop" />
						</InputRoot>
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700"
						>
							Country
						</label>

						<Select placeholder="Select a country">
							<SelectItem value="br" text="Brazil" />
							<SelectItem value="us" text="United States" />
						</Select>
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700"
						>
							Timezone
						</label>

						<Select placeholder="Select a timezone">
							<SelectItem value="US" text="Standard Time (UTC-08:00)" />
							<SelectItem value="BR" text="American São Paulo (UTC-03:00)" />
						</Select>
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="block mt-0.5 text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>

						<div className="space-y-3">
							<div className="grid gap-3 grid-cols-2">
								<Select placeholder="" defaultValue="normal">
									<SelectItem value="normal" text="Normal text" />
									<SelectItem value="medium" text="Medium text" />
								</Select>

								<div className="flex items-center gap-1">
									<button
										type="button"
										className="p-2 hover:bg-zinc-50 rounded-md"
									>
										<Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button
										type="button"
										className="p-2 hover:bg-zinc-50 rounded-md"
									>
										<Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button
										type="button"
										className="p-2 hover:bg-zinc-50 rounded-md"
									>
										<Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button
										type="button"
										className="p-2 hover:bg-zinc-50 rounded-md"
									>
										<List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button
										type="button"
										className="p-2 hover:bg-zinc-50 rounded-md"
									>
										<ListOrdered
											className="h-4 w-4 text-zinc-500"
											strokeWidth={3}
										/>
									</button>
								</div>
							</div>

							<TextArea defaultValue="	Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem	itaque neque corrupti commodi eos maiores molestiae inventore voluptatibus? Suscipit nemo modi molestias quos omnis	aperiam consectetur esse impedit repudiandae." />
						</div>
					</div>

					<div className="grid gap-3 grid-cols-form pt-5">
						<label
							htmlFor="portfolio"
							className="text-sm font-medium text-zinc-700"
						>
							Portfolio projects
							<span className="block mt-0.5 text-sm font-normal text-zinc-500">
								Share a few snippets of your work.
							</span>
						</label>

						<FileInput.Root className="items-start gap-5">
							<FileInput.Trigger />
							<FileInput.FileList />
							<FileInput.Control multiple />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<button
							type="button"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300
							text-zinc-700 hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600
							text-white hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
