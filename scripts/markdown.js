
export const strip = markdown => {
    const tokens = []

    for (const block of markdown.split("\n")) {
        if (block.length) {
            const firstChar = block.charAt(0)

            if (firstChar != '#') {
                tokens.push(block)
            }
        }
    }

    return tokens.join("\n")
}

export const toHTML = markdown => {
    return markdown
}
