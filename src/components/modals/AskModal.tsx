import { useState } from "react"
import Modal from "./Modal"

export default function AskModal({
  close,
}: {
  close: () => void
}) {
  const [questionText, setQuestionText] = useState('')

  function handleSubmit() {
    
  }

  return (
    <Modal close={() => close()}>
      <div className="w-96 p-4">
        <p>Ask Question</p>
        <textarea
          className="w-full px-3 py-2 my-2 text-gray-700 border rounded-lg focus:outline-none"
          rows={4}
          placeholder="Start typing your question..."
          autoFocus={true}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <div className="flex justify-between h-10">
          <button onClick={close} className="text-white rounded-lg w-20 p-2 bg-blue-500 hover:bg-blue-800">Cancel</button>
          <button onClick={handleSubmit} className="text-white rounded-lg w-20 p-2 bg-blue-500 hover:bg-blue-800">Ask</button>
        </div>
      </div>
    </Modal>
  )
}