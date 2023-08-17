import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-gray-950/30 py-5 mb-2">
            <div className="container mx-auto flex justify-between px-0 lg:px-10">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        Next App
                    </h1>
                </Link>
                <ul className="flex gap-x-4">
                    <li>
                        <Link href="/tasks/new">
                            New Task
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
