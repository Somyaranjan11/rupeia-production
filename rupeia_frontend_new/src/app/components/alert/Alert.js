import Swal from "sweetalert2";
/**
 * @date 18-07-2023
 * @author Somyaranjan Sahoo  <somyar.sahoo@nettantra.net>
 * @param message is used to show the message while alerting.
 */
const Alert = ({ message = "alert" }) => {
  Swal.mixin({
    toast: true,
    timerProgressBar: false,
    position: "top-right",
    showConfirmButton: false,
    buttonsStyling: false,
    timer: 1500,
    customClass: {
      popup: "custom-popup-class",
    },
  }).fire({
    icon: "info",
    html: `<span class="customalert">${message}</span>`,
  });
  return <></>;
};

export default Alert;
