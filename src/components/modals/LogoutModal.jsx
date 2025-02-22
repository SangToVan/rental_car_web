import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../shared/toolkits/authSlice'
import { Modal } from 'react-bootstrap'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function LogoutModal({ show = false, onClose = () => {} }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClose = () => {
    if (onClose) onClose()
  }

  const handleLogout = () => {
    dispatch(logout())
    handleClose()
    navigate('/')
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title>Log out</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Are you sure you want to log out?</p>
      </Modal.Body>
      <Modal.Footer className="p-0">
        <div className="btn-group m-0 w-100" role="group">
          <button
            type="button"
            className={clsx('m-0 btn border-end', styles.btn_footer_modal)}
            onClick={handleClose}
          >
                        Cancel
          </button>
          <button
            type="button"
            className={clsx('m-0 btn', styles.btn_footer_modal)}
            onClick={handleLogout}
          >
                        OK
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}