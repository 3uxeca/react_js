import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({movie , setIsOpen}) => {
    const {movieNm,director,thumbUrl} = movie 
    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h3>{movieNm} </h3>
                <div>
                    <img src={thumbUrl} alt="" />
                </div>
                <strong>
                    감독 : {director} 
                </strong>
                <p className="more" onClick={ ()  => setIsOpen(false) }>
                    <AiOutlineCloseCircle />    
                </p>
            </div>
        </div>
    );
};

export default Modal;