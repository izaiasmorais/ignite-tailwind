import { SettingsTabs } from "@/components/settings-tabs";
import { InputControl, InputPrefix, InputRoot } from "@/components/input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "@/components/form/select";
import { SelectItem } from "@/components/form/select/select-item";
import { TextArea } from "@/components/textarea";
import { Button } from "@/components/button";
import * as FileInput from "@/components/form/file-input";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
				Settings
			</h1>

			<SettingsTabs />

			<div className="mt-6 flex flex-col">
				<div
					className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between pb-5
				border-b border-zinc-200 dark:border-zinc-700"
				>
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
							Personal info
						</h2>
						<span className="text-sm text-zinc-500 dark:text-zinc-400">
							Update your photo in personal details here.
						</span>
					</div>

					<div className="flex items-center gap-2">
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" variant="primary">
							Save
						</Button>
					</div>
				</div>

				<form
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
				>
					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Name
						</label>

						<div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
							<InputRoot>
								<InputControl
									id="firstName"
									defaultValue="Izaías"
								></InputControl>
							</InputRoot>

							<div className="flex flex-col gap-3 lg:block">
								<label
									htmlFor="lastName"
									className="text-sm font-medium text-zinc-700 lg:sr-only"
								>
									Last name
								</label>

								<InputRoot>
									<InputControl defaultValue="Lima"></InputControl>
								</InputRoot>
							</div>
						</div>
						<div />
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Your photo
							<span className="block mt-0.5 text-sm font-normal text-zinc-500">
								This will displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex lg:flex-row flex-col lg:items-start gap-5 ">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Role
						</label>

						<InputRoot>
							<InputControl id="role" defaultValue="Web Develop" />
						</InputRoot>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Country
						</label>

						<Select placeholder="Select a country">
							<SelectItem value="br" text="Brazil" />
							<SelectItem value="us" text="United States" />
						</Select>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Timezone
						</label>

						<Select placeholder="Select a timezone">
							<SelectItem value="US" text="Standard Time (UTC-08:00)" />
							<SelectItem value="BR" text="American São Paulo (UTC-03:00)" />
						</Select>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Bio
							<span className="block mt-0.5 text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>

						<div className="space-y-3">
							<div className="flex flex-col lg:grid gap-3 grid-cols-2">
								<Select placeholder="" defaultValue="normal">
									<SelectItem value="normal" text="Normal text" />
									<SelectItem value="medium" text="Medium text" />
								</Select>

								<div className="flex items-center gap-1">
									<Button variant="ghost" type="button">
										<Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button variant="ghost" type="button">
										<Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button variant="ghost" type="button">
										<Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button variant="ghost" type="button">
										<List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button variant="ghost" type="button">
										<ListOrdered
											className="h-4 w-4 text-zinc-500"
											strokeWidth={3}
										/>
									</Button>
								</div>
							</div>

							<TextArea defaultValue="	Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem	itaque neque corrupti commodi eos maiores molestiae inventore voluptatibus? Suscipit nemo modi molestias quos omnis	aperiam consectetur esse impedit repudiandae." />
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="portfolio"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" variant="primary">
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
