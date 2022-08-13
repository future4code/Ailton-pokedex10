import swal from "@sweetalert/with-react";
import "./style.css";
import { ContainerAlertSweet } from "./style";

export const alertSearchPokemon = () => {
  swal({
    icon: "error",
    buttons: {
      confirm: {
        text: "Ok",
        className: "alert-sweet-button",
        closeModal: true,
      },
    },
    content: (
      <ContainerAlertSweet>
        <h1>Falhou!</h1>
        <p>Nenhum pokemon encontrado com este nome.</p>
      </ContainerAlertSweet>
    ),
  });
};