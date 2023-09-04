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

export function Sidebar() {
	return (
		<aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
			<Logo />

			<div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
				<Search className="h-5 w-5 text-zinc-500 cursor-pointer hover:text-zinc-600" />
				<input
					placeholder="Search..."
					className="flex-1 outline-none border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
				/>
			</div>

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
