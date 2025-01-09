import { FC } from "react"
import { ModalComponent } from "../../../../../../shared/components/modal/ModalComponent"
import { PropositureSendFunctions } from "./PropositureSendFunctions"
import { IPropositureSend } from "../../../../../../shared/interface/IPropositureSend";
import { Input } from "../../../../../../shared/components/input/Input";

export const PropositureSend: FC<IPropositureSend> = ({closeAction,show}) => {
    const { } = PropositureSendFunctions();
    return (
        <>
            <ModalComponent
                showModal={show}
                title={<span className="font-semibold">Seu proximo projeto esta proximo de se tornar realidade!</span>}
                accepetButtonFunction={() => console.log('clique')}
                decclineButtonFunction={closeAction}
                acceptButtonTitle="Enviar proposta"
                decclineButtonTitle="Fechar"
            >
                <div
                    className="grid grid-cols-2 lg:grid-cols-12 md:grid-cols-12 gap-6 p-4"
                >
                    <fieldset
                        className="col-span-6 lg:col-span-6 flex flex-col"
                    >
                        <label>
                            Nome
                        </label>
                        <Input
                            onBlur={(value) => {

                            }}
                            placeholder="Insira aqui o texto..."

                        />
                    </fieldset>
                    <fieldset
                        className="col-span-6 lg:col-span-6 flex flex-col"
                    >
                        <label>
                            Nome da Empresa
                        </label>
                        <Input
                            onBlur={(value) => {

                            }}
                            placeholder="Insira aqui o texto..."
                            
                        />
                    </fieldset>
                    <fieldset
                        className="col-span-6 lg:col-span-6 flex flex-col"
                    >
                        <label>
                            Email
                        </label>
                        <Input
                            onBlur={(value) => {

                            }}
                            placeholder="Insira aqui o texto..."

                        />
                    </fieldset>
                    <fieldset
                        className="col-span-6 lg:col-span-6 flex flex-col"
                    >
                        <label>
                            Celular (WhatsApp)
                        </label>
                        <Input
                            onBlur={(value) => {

                            }}
                            placeholder="Insira aqui o texto..."
                            
                        />
                    </fieldset>
                    <fieldset
                        className="col-span-12 lg:col-span-12 flex flex-col"
                    >
                        <label>
                            Descreva aqui um pouco mais sobre o seu projeto
                        </label>
                        <textarea
                            className="border border-gray-200 rounded-md p-2 focus:outline-accent_light/20"
                            onBlur={(value) => {

                            }}
                            placeholder="Insira aqui o texto..."
                            
                        />
                    </fieldset>
                </div>
            </ModalComponent>
        </>
    )
}