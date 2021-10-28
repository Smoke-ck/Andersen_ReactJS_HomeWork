import {FC} from 'react'
import "./modal.scss"

type IModal ={
  active:boolean
  setActive:any,
  children:any
}
const Modal:FC<IModal>= ({active,setActive,children}) => {
  return(
    <div className={active ? 'modal active' : 'modal'} onClick ={() => {setActive(false)}}>
      <div className="modal__content" onClick={e => e.stopPropagation() }>
        {children}
      </div>
    </div>
  )
}
export default Modal;


