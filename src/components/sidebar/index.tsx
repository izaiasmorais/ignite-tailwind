"use client";
import { Logo } from "./logo";
import {
	Search,
	BarChart,
	CheckSquare,
	Flag,
	Home,
	SquareStack,
	Users,
	LifeBuoy,
	Cog,
	Menu,
} from "lucide-react";
import { NavItem } from "./nav-item";
import { UsedSpaceWidget } from "./used-space-widget";
import { Profile } from "./profile";
import { InputControl, InputPrefix, InputRoot } from "../input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../button";
export function Sidebar() {
	return (
		<Collapsible.Root
			className="border-b data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 left-0 top-0
			right-0 border-zinc-200 flex flex-col gap-6 p-4 fixed z-20 bg-white
			lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 data-[state=open]:h-screen
			lg:data-[state=open]:h-screen"
		>
			<div className="flex items-center justify-between ">
				<Logo />
				<Collapsible.Trigger className="lg:hidden">
					<Button variant="ghost">
						<Menu className="w-6 h-6" />
					</Button>
				</Collapsible.Trigger>
			</div>

			<Collapsible.Content
				forceMount
				className="data-[state=closed]:hidden lg:data-[state=closed]:flex	flex-col gap-6
				flex-1"
			>
				<InputRoot>
					<InputPrefix>
						<Search className="w-5 h-5 text-zinc-500" />
					</InputPrefix>
					<InputControl placeholder="Search..." />
				</InputRoot>

				<nav className="space-y-0.5">
					<NavItem title="Home" icon={Home} />
					<NavItem title="Dashboard" icon={BarChart} />
					<NavItem title="Projects" icon={SquareStack} />
					<NavItem title="Tasks" icon={CheckSquare} />
					<NavItem title="Reporting" icon={Flag} />
					<NavItem title="Users" icon={Users} />
				</nav>

				<div className="mt-auto flex flex-col gap-6">
					<nav className="space-x-0.5">
						<NavItem title="Support" icon={LifeBuoy} />
						<NavItem title="Settings" icon={Cog} />
					</nav>

					<UsedSpaceWidget />

					<div className="h-px bg-zinc-200" />

					<Profile />
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
