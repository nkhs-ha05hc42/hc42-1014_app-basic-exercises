const putSample3 = (req, res) => {
    const { code, postcode, address } = req.body;

    const predefinedData = {
        code: "HC42-9823",
        postcode: "123-4567",
        address: "旧住所"
    }

    if (code !== predefinedData.code) {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "not found code!"
        }))
        return;
    }

    const differences = {};
    if (postcode !== predefinedData.postcode) differences.postcode = postcode;
    if (address !== predefinedData.address) differences.address = address;

    console.log(differences);

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}

export const sample1Controller = {
    putSample3
}
