import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((response) => {
                setContent(response.data.content);
            })
            .catch((error) => {
                console.error("Error fetching content:", error);
            });
    }, []);

    return content;
}
