import { FC } from "react";
import { IModalComponent } from "../../interface/IModalComponent";
import { DialogUi } from "../../../components/ui/Dialog";
import { ModalComponentFunction } from "./ModalComponentFunction";
import { Button } from "../../../components/formFields/Button";

export const ModalComponent: FC<IModalComponent> = ({
    children,
    showModal,
    title,
    decclineButtonTitle,
    accepetButtonFunction,
    acceptButtonTitle,
    decclineButtonFunction
}) => {
    const {show, acceptButton, closeModal, } = ModalComponentFunction({
        showModal,
        acceptButtonFunction: accepetButtonFunction,
        closeModalFunction: decclineButtonFunction
    });


    return (
        <>
            <DialogUi.Root
                showDialog={show}
            >
                <DialogUi.Header>
                    <div>
                        {title}
                    </div>
                </DialogUi.Header>
                <DialogUi.Body>
                    {children}
                </DialogUi.Body>
                <DialogUi.Footer>
                    <div
                        className="flex flex-row content-end justify-end gap-2"
                    >
                        <Button
                            colorButton="primary"
                            onClick={acceptButton}
                        >
                            {acceptButtonTitle}
                        </Button>
                        <Button
                            colorButton="secundary"
                            onClick={closeModal}
                        >
                            {decclineButtonTitle}
                        </Button>
                    </div>
                </DialogUi.Footer>
            </DialogUi.Root>
        </>
    )
}