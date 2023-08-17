import { Cards } from "../components/cards"
export default function HomePage() {

  return (
    <main className="flex h-[calc(100vh-7rem)] flex-col items-center py-8 ">
      <h1 className="text-5xl font-bold">Todo List</h1>
      <div className="mt-8">
        <Cards />
      </div>

    </main>
  )
}
