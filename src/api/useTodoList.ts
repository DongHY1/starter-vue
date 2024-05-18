import { useQuery } from '@tanstack/vue-query'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function getTodos(): Promise<Todo[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok)
    throw new Error('Network response was not ok')

  return response.json()
}
export default function useTodoList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
  return { isPending, isError, data, error }
}
