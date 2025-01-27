const postSample3 = (req, res) => {
    const { code, postcode, address } = req.body;

    if (code === "HC42-9821") {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "code already exists!"
        }))
        return;
    }

    console.log({
        code,
        postcode,
        address
    })

    res.send(JSON.stringify({
        status: "OK",
        postcode: postcode
    }))
}

export const sample1Controller = {
    postSample3
}
