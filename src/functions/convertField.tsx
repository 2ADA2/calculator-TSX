export function convertField(value : string){
    value = String(value.split("+").at(-1))
    value = String(value.split("-").at(-1))
    value = String(value.split("*").at(-1))
    value = String(value.split("/").at(-1))
    if(value.split("").filter(e => e ===".").length > 1 || value.split("")[0] === "0"){
        return String(parseFloat(value) || value || 0)
    }
    return value

}