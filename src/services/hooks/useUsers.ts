import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    createdAt: string;
    email: string;
}

type GetUsersResponse = {
    totalCount: number;
    users: User[],
}

async function getUsers(page: number): Promise<GetUsersResponse> {
        const { data, headers } = await api.get('/users', {
            params: {
                page,
            }
        })

        const totalCount = Number(headers['x-total-count'])
        
        const users = data.users.map(user =>{
            return {
                name: user.name,
                id: user.id,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                })
            }
        })
    
        return {
            users,
            totalCount
        };
    }

export function useUsers(page: number) {
   return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 60 * 10, // 10 minutes
    }) 
}