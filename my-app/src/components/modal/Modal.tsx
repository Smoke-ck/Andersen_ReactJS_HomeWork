import { FC } from 'react'
import "./modal.scss"
import ReactDom from 'react-dom'

const portal = document.getElementById('portal')!;
type IModal = {
  active: boolean
  setActive: any,
  children: any,
  handleToggleModal: () => void
}
const Modal: FC<IModal> = ({ active, setActive, children, handleToggleModal }) => {

  return ReactDom.createPortal(
    <div className={active ? 'modal active' : 'modal'} onClick={() => { setActive(false) }}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__close">
          <button className="deleteMenu__button deleteMenu__button--close"
            onClick={handleToggleModal}>Х
          </button>
        </div>
        {children}
      </div>
    </div>,
    portal
  )
}
export default Modal;


