const getSample3 = (req, res) => {
    const { code } = req.query;

    const predefinedData = {
        code: "HC42-9821",
        name: "情報太郎"
    }

    if (code === predefinedData.code) {
        res.send(JSON.stringify({
            code: predefinedData.code,
            name: predefinedData.name
        }))
    } else {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "not found code!"
        }))
    }
}

export const sample1Controller = {
    getSample3
}