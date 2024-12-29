"use client"

import * as React from "react"
import {
    BookOpen,
    Bot,
    ChevronRight,
    Settings2,
    SquareTerminal,
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

const data = {
    navMain: [
        {
            title: "Justificación del Framework Next.js",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "¿Para qué sirve?",
                    url: "#",
                },
                {
                    title: "¿Qué aplicaciones tiene?",
                    url: "#",
                },
                {
                    title: "¿Sobre qué lenguajes se apoya?",
                    url: "#",
                },
                {
                    title: "¿Qué prerrequisitos necesita?",
                    url: "#",
                },
            ],
        },
        {
            title: "Instalación",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "¿Se precisa instalación?",
                    url: "#",
                },
                {
                    title: "¿Qué pasos hay que realizar para realizar la instalación?",
                    url: "#",
                },
                {
                    title: "¿Versiones necesarias?",
                    url: "#",
                },
                {
                    title: "¿Rutas para tener en cuenta?",
                    url: "#",
                },
                {
                    title: "¿Variables de entorno?",
                    url: "#",
                },
                {
                    title: "¿Necesita base de datos?",
                    url: "#",
                },
            ],
        },
        {
            title: "Primeros pasos",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Cómo realizar una primera aproximación (“Hola Mundo”)",
                    url: "#",
                },
            ],
        },
        {
            title: "Utilización del Framework",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "¿Cómo empezar a crear una aplicación base?",
                    url: "#",
                },
                {
                    title: "¿Cómo visualizar los resultados de la ejecución?",
                    url: "#",
                },
                
            ],
        },
        {
            title: "Explicación del funcionamiento del Framework Next.js",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "¿Actúa sobre páginas, ficheros, secciones…?",
                    url: "#",
                },
                {
                    title: "¿Cómo se editan/modifican los ficheros que actúan en el framework?",
                    url: "#",
                },
                {
                    title: "¿Cómo se referencian los ficheros creados desde otras aplicaciones (si es el caso)?",
                    url: "#",
                },
            ],
        },
        {
            title: "Conclusiones del tutorial",
            url: "#",
        },
    ],
}

export default function AppSidebar({ children }) {
    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="font-bold text-lg">Tutorial Next.js</SidebarGroupLabel>
                        <SidebarMenu>
                            {data.navMain.map((item, index1) => (
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
                                                            <a href={subItem.url}>
                                                                <span>{String.fromCharCode(index2 + 97)} - {subItem.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
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
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
