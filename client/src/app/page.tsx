import { Cards } from "../components/cards"
export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Todo List</h1>
      <div>
        <Cards />
      </div>

    </main>
  )
}
