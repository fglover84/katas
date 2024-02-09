export function count(input: string) {
    const specialChars = "!&@$%^&\":?."
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // "one,two,three"
    const inputArray: string[] = input.split(" ").join().split("\n").join().split(", ").join().split(",");
    // ["one", "of", "each"]
    const inputMap = new Map<string, number>()

    inputArray.map((item) => {
        let sanitizedItem = item.split("").filter((char) => specialChars.indexOf(char) == -1).join("").toLowerCase()
        const itemArray = sanitizedItem.split("");
        for (let i = 0; i < itemArray.length; i++){
            if (itemArray[i] == "'" && i == 0) {
                itemArray[0] = "";
            } else {
                if (itemArray[i] == "'") {
                    if (alpha.indexOf(itemArray[i - 1]) == -1 || alpha.indexOf(itemArray[i + 1]) == -1) {
                        itemArray[i] = "";
                    }
                }
            }
        }
        sanitizedItem = itemArray.join("");
        if (item.length > 0) {
            const itemValue = inputMap.get(sanitizedItem)
            if (!itemValue) {
                inputMap.set(sanitizedItem, 1)
            } else {
                inputMap.set(sanitizedItem, itemValue + 1)
            }
        }
        
    })
    return inputMap;
}