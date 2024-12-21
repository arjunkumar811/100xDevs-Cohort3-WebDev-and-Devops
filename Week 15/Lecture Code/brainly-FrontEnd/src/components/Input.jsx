                                                 //@ts-ignore
export function Input({onChange, placeholder}) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2   border-solid  rounded-md" onChange={onChange} />
    </div>
}