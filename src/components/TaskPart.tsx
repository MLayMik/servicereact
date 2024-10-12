import { CheckBadgeIcon, CheckIcon, PencilIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface Props {
  name: string
  isChecked: boolean
  toggleCheck: () => void
  deleteTask: () => void
  editTask: (newName: string) => void
}

export default function TaskPart({ name, isChecked, toggleCheck, deleteTask, editTask }: Props) {
  const [editing, setEditing] = useState(false)
  const [value, setInValue] = useState<string>(name)
  const handleSave = () => {
    editTask(value)
    setEditing(false)
  }
  return (
    <div className="flex justify-between my-3">
      <div className="flex gap-x-4">
        <button
          onClick={toggleCheck}
          className="w-5"
        >
          <CheckBadgeIcon className={isChecked ? 'text-violet-600' : 'text-slate-300'} />
        </button>
        {!editing
          ? (
              <p
                onClick={() => setEditing(true)}
                className={isChecked ? 'line-through' : ''}
              >
                {name}
              </p>
            )
          : (
              <>
                <input
                  type="text"
                  className="w-full bg-slate-200 rounded-xl px-2"
                  onChange={e => setInValue(e.target.value)}
                  value={value}
                />
                <button onClick={handleSave} className="w-5"><CheckIcon /></button>
              </>
            )}

      </div>
      <div>
        <button
          className="w-5 mr-3"
          onClick={() => setEditing(true)}
        >
          <PencilIcon />
        </button>
        <button
          className="w-5"
          onClick={deleteTask}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
