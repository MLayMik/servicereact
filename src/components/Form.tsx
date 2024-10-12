import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Form({ addTask }: any) {
  const [inValue, setInValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inValue.trim()) {
      addTask(inValue)
      setInValue('')
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-x-5">
      <input
        type="text"
        className="w-full bg-slate-200 rounded-xl px-2"
        onChange={e => setInValue(e.target.value)}
        value={inValue}
      />
      <button type="submit" className="w-10"><PlusCircleIcon /></button>
    </form>
  )
}
