import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from './Card';

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const [type, setType] = useState(ContentType.Youtube);

   async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })


        if (!title || !link) {
            alert("Please fill in all fields.");
            return;
        }

       
        console.log("Content Submitted:", { title, link, type });
        alert(`Content added successfully!\nType: ${type}\nTitle: ${title}\nLink: ${link}`);
        onClose(); 
    }

    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <div className="flex justify-end mb-4">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Input ref={titleRef} placeholder="Title" />
                            <Input ref={linkRef} placeholder="Link" />
                        </div>
                        <div className="flex justify-between mt-4">
                            <Button
                                text="YouTube"
                                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                onClick={() => setType(ContentType.Youtube)}
                            />
                            <Button
                                text="Twitter"
                                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                onClick={() => setType(ContentType.Twitter)}
                            />
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
