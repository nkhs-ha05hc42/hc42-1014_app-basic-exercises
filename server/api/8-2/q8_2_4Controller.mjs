const deleteSample3 = (req, res) => {
    const { code } = req.query;

    const predefinedData = {
        code: "HC42-9824"
    }

    if (code !== predefinedData.code) {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "not found code!"
        }))
        return;
    }

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}

export const sample1Controller = {
    deleteSample3
};
