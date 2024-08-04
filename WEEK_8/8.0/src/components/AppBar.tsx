import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between pb-8">
        <div>Youtube Logo</div>
        <div>
            <SearchBar />
        </div>
        <div>Sign In</div>
    </div>
}