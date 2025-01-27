const deleteSample2 = (req, res) => {
    const { code } = req.query;

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}

export const sample1Controller = {
    deleteSample2
};
