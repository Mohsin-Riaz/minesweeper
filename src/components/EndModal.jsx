import React from 'react';
import { MdOutlineRefresh } from 'react-icons/md';
const EndModal = (props) => {
    const { endGame } = props;

    if (!endGame) return <></>;

    return (
        <div className="modal">
            <h1>{endGame}</h1>
            <button
                className="modal_button"
                onClick={() => window.location.reload()}
            >
                Play Again <MdOutlineRefresh />
            </button>
        </div>
    );
};

export default EndModal;
