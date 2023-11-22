"use client";
import { InputControl, InputPrefix, InputRoot } from "../input";
import { Search, LifeBuoy, Cog, Menu } from "lucide-react";
import { UsedSpaceWidget } from "./used-space-widget";
import { Navigation } from "./navigation";
import { NavItem } from "./navigation/nav-item";
import { Profile } from "./profile";
import { Button } from "../button";
import { Logo } from "./logo";
import * as Collapsible from "@radix-ui/react-collapsible";

export function Sidebar() {
	return (
		<Collapsible.Root
			className="border-b data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 left-0 top-0
			right-0 border-zinc-200 flex flex-col gap-6 p-4 fixed z-20 bg-white
			lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 data-[state=open]:h-screen
			lg:data-[state=open]:h-screen lg:h-auto dark:bg-zinc-900 dark:border-zinc-800"
		>
			<div className="flex items-center justify-between ">
				<Logo />

				<Collapsible.Trigger asChild className="lg:hidden">
					<Button variant="ghost">
						<Menu className="w-6 h-6 text-zinc-500" />
					</Button>
				</Collapsible.Trigger>
			</div>

			<Collapsible.Content
				asChild
				forceMount
				className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade
				data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
			>
				<div className="flex flex-1 flex-col gap-6">
					<InputRoot>
						<InputPrefix>
							<Search className="w-5 h-5 text-zinc-500" />
						</InputPrefix>
						<InputControl type="text" placeholder="Search" />
					</InputRoot>

					<Navigation />

					<div className="mt-auto flex flex-col gap-6">
						<nav className="space-x-0.5">
							<NavItem title="Support" icon={LifeBuoy} />
							<NavItem title="Settings" icon={Cog} />
						</nav>

						<UsedSpaceWidget />

						<div className="h-px bg-zinc-200" />

						<Profile />
					</div>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
