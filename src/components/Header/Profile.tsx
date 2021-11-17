import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>João Rambo</Text>
                <Text color="gray.300" font-size="small">
                    jpramboguanabara@hotmail.com
                </Text>
            </Box>
            )}

        <Avatar size="md" name="João Rambo" src=""/>
     </Flex>
    );
}