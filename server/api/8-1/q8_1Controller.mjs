const getSample1 = (req, res) => {
    const code = req.query.code;

    res.send(JSON.stringify({
        code: code,
        name: "情報太郎"
    }),
)
}

export const sample1Controller = {
    getSample1
}