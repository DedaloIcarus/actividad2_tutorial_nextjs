"use client";

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import * as React from "react"
import {
    ChevronRight,
} from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {ModeToggle} from "@/components/ui/theme-switcher";
import navitems from "@/config/navitems";
import Transition from "@/components/transition";

export default function AppSidebar({ children }) {

    const renderSidebarMenuItems = (item, index1) => {
        if (item.items?.length > 0) {
            return (
                <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={item.isActive}
                    className="group/collapsible"
                >
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={item.title}>
                                <div className="min-h-4 min-w-4 text-center">{index1 + 1}</div>
                                <span className="truncate">{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {item.items?.map((subItem, index2) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton asChild>
                                            <Link href={subItem.url}>
                                                <span>{String.fromCharCode(index2 + 97)} - {subItem.title}</span>
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            )
        } else {
            return (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <Link href={item.url}>
                            <div className="min-h-4 min-w-4 text-center">{index1 + 1}</div>
                            <span className="truncate">{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )
        }
    }

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="font-bold text-lg">Tutorial Next.js</SidebarGroupLabel>
                        <SidebarMenu>
                            {navitems.map((item, index1) => (
                                renderSidebarMenuItems(item, index1)
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 w-full">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <ModeToggle />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <Transition key={usePathname()}>
                            {children}
                        </Transition>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
