import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});


/*DISPLAY TOAST MESSAGE
    @params:
        type:"success", "error", "warning", "info", "question"
        message: message to be displayed
*/
export default function showError(type = "error", message = "Internal server error") {
    Toast.fire({
        icon: type,
        title: message,
    });
}