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
} from "lucide-react";
import { NavItem } from "./nav-item";
import { UsedSpaceWidget } from "./used-space-widget";
import { Profile } from "./profile";
import { InputControl, InputPrefix, InputRoot } from "../input";

export function Sidebar() {
	return (
		<aside
			className="border-b border-zinc-200 flex flex-col gap-6 p-4 fixed left-0 top-0 right-0
			z-20 bg-white lg:right-auto lg:w-70 lg:border-r lg:px-5 lg:py-8 lg:relative "
		>
			<Logo />

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
		</aside>
	);
}
