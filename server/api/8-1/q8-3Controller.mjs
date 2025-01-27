const putSample2 = (req, res) => {
    const { code, postcode, address } = req.body;

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
    putSample2
}