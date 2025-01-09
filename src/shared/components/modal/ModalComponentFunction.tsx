import { useEffect, useState } from "react"
import { IModalComponentDto } from "../../dto/IModalComponentDto";

export const ModalComponentFunction = (modalComponentDto: IModalComponentDto) => {
    const { showModal, closeModalFunction, acceptButtonFunction } = modalComponentDto;
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(showModal)
    }, [showModal])


    const closeModal = () => {
        closeModalFunction()
    }

    const openModal = () => {

    }

    const acceptButton = () => {
        acceptButtonFunction()
    }

    return {
        show,
        setShow,
        acceptButton,
        openModal,
        closeModal
    }
}