import { useSearchUsersQuery } from "../store/github/github.api"

export function HomePage() {

    const {isLoading, isError, data} = useSearchUsersQuery()

    return (
        <div>HomePage</div>
    )
}