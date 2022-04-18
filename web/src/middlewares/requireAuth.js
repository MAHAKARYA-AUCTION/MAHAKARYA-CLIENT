import { Navigate, useParams } from "react-router-dom";

export default function RequireAuth(props) {
    let { id } = useParams();
    const access_token = localStorage.getItem("access_token");
    if (!access_token || id !== localStorage.getItem("id")) {
        return <Navigate to="/" replace />;
    }

    return props.children;
}