import AskModal from "./modals/AskModal";
import ModalService from "./modals/ModalService";

export default function TopHeader() {
  return (
    <nav className="fixed top-0 z-20 w-full shadow px-4 py-2">
      <button className="py-2 text-lg font-bold text-white rounded-lg w-44 bg-blue-500 hover:bg-blue-800" onClick={() => ModalService.open(AskModal)}>
        Ask Question
      </button>
    </nav>
  )
}
