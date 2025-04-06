import Swal from "sweetalert2";

export const sweetAlert = (icon: any, message: any) => {
  Swal.fire({
    position: "top-start",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1000,
  });
};
