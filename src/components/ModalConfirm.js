import { Modal, Button } from 'react-bootstrap';
import {  toast } from 'react-toastify';

const ModalConfirm = ( props ) => {
    const { show, handleClose ,dataUserDelete } = props;

const confirmDelete = () => {

};

    return (
        <>
             <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Delete a user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='body-add-new'>
                       <p>Are you sure to delete this user  </p> 
                       <br/>
                       <b>Email = { dataUserDelete.email } ?</b>

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => ComfirmDelete()} >Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalConfirm