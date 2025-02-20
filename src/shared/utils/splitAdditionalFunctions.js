export default function slitAdditionalFunctions(funcString) {
    return funcString?.split(',').map((func) => func.trim()) || []
}