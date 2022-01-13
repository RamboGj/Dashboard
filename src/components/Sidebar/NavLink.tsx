import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
    href: string;
    shouldMatchExactHref:boolean
}

export function NavLink({ shouldMatchExactHref=false, icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink shouldMatchExactHref={shouldMatchExactHref} href={href} passHref>
        <ChakraLink display="flex" align="center" {...rest} >
            <Icon as={icon} font-size="20"/>
            <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
    </ActiveLink>
    )  
}