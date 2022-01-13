import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
import { RiInputMethodLine, RiGitMergeLine, RiContactsLine, RiDashboardLine } from 'react-icons/ri'
import { Box, Stack } from "@chakra-ui/react";


export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
             <NavSection title="GERAL">
                <NavLink shouldMatchExactHref icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink shouldMatchExactHref icon={RiContactsLine} href="/users">Usuários</NavLink>
            </NavSection>
            <NavSection title="AUTOAMAÇÃO">
                <NavLink shouldMatchExactHref icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                <NavLink shouldMatchExactHref icon={RiGitMergeLine} href="/automation">Automação</NavLink>  
            </NavSection>
        </Stack>
    );
}