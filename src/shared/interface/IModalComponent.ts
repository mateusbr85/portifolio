import { ReactNode } from "react";

export interface IModalComponent {
    title: ReactNode,
    children: ReactNode,
    acceptButtonTitle: string,
    decclineButtonTitle: string,
    accepetButtonFunction: () => void;
    decclineButtonFunction: () => void;
    showModal: boolean;
}