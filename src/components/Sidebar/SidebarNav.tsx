import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
import { RiInputMethodLine, RiGitMergeLine, RiContactsLine, RiDashboardLine } from 'react-icons/ri'
import { Box, Stack } from "@chakra-ui/react";


export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
             <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
            </NavSection>
            <NavSection title="AUTOAMAÇÃO">
                <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>  
            </NavSection>
        </Stack>
    );
}