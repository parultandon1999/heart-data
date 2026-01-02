import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  BarChart3,
  Database,
  Brain,
  FileText,
  Settings,
  Users,
  Bell,
  Palette,
  Shield,
  ChevronLeft,
  ChevronRight,
  Layers,
  Activity,
  Beaker,
  Sun,
  Moon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Models", url: "/models", icon: Brain },
  { title: "Datasets", url: "/datasets", icon: Database },
  { title: "Experiments", url: "/experiments", icon: Beaker },
  { title: "Pipelines", url: "/pipelines", icon: Activity },
];

const contentNavItems = [
  { title: "Research Papers", url: "/papers", icon: FileText },
  { title: "Notebooks", url: "/notebooks", icon: Layers },
  { title: "Team", url: "/team", icon: Users },
];

const settingsNavItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Appearance", url: "/appearance", icon: Palette },
  { title: "Security", url: "/security", icon: Shield },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;
  const isDark = theme === "dark";

  const renderNavItems = (items: typeof mainNavItems) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={isActive(item.url)}>
            <NavLink
              to={item.url}
              end
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-sidebar-accent"
              activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-sidebar-foreground">DataSci Hub</h2>
              <p className="text-xs text-sidebar-foreground/60">Analytics Platform</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider">
            {!collapsed && "Main"}
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderNavItems(mainNavItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider">
            {!collapsed && "Content"}
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderNavItems(contentNavItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider">
            {!collapsed && "Configuration"}
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderNavItems(settingsNavItems)}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2 space-y-2">
        {/* Theme Toggle */}
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between px-3"} py-2`}>
          {!collapsed && (
            <div className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
              <Sun className="h-4 w-4" />
              <span>Dark Mode</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            {collapsed && (isDark ? <Moon className="h-4 w-4 text-sidebar-foreground/70" /> : <Sun className="h-4 w-4 text-sidebar-foreground/70" />)}
            <Switch
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="w-full justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
