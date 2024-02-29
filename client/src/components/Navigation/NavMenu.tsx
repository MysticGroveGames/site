import { forwardRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "../Logo";
import { GameType } from "@/types/Game";
import { PrimaryNavType } from "@/types/Nav";

export function NavMenu(){
  const [gameNavData, setGameNavData] = useState<GameType[] | null>(null);
  const [navData, setNavData] = useState<PrimaryNavType[] | null>(null);
  useEffect(() => {
    const callBackendAPI = async () => {
      try {
        const response = await fetch("/api/primarynav");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const body = await response.json();
        setGameNavData(body.gameNavItems);
        setNavData(body.primaryNavItems);
      } catch (error:unknown) {
        let message
      if (error instanceof Error) {
        message = error.message
      }  else {
        message = String(error)
      }
      console.error(message);
      }
    };
    callBackendAPI();
  }, []);

  return ( 
    <NavigationMenu className="flex-initial mb-8 w-full max-w-full">
      <NavigationMenuList className="w-full flex-col md:flex-row">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            <Logo maxWidth={200} />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className="flex flex-row">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Games</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="mx-auto grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/games"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      All boardgames
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Fantasy themes boardgames.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {gameNavData && gameNavData.map((component) => (
                <ListItem
                  key={component.name}
                  title={component.displayName}
                  href={`/games/${component.name}`}
                >
                  {component.summary}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {navData && navData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={`/${component.name}`}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
   );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"