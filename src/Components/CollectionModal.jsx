import React,{useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CollectionContent from "./CollectionContent";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius:6,
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const CollectionModal = ({title}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <div>
      <button onClick={handleOpen} className="upload text-white font-bold rounded-full w-44 py-2">{title}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CollectionContent/>
        </Box>
      </Modal>
    </div>
  );
};

export default CollectionModal;
