export * from "./sample1/controller.mjs"
const postSample1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
}

const getPathParamSample1 = (req, res) => {
res.send(
JSON.stringify({
id: req.query.id,
message: "メッセージを取得します",
}),
)
}

const putSample1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
}

const deleteSample1 = (req, res) => {
    res.send(JSON.stringify({ status: "success", id: req.query.id }))
}

const getSample1 = (req, res) => {
    const code = req.query.code;

    res.send(JSON.stringify({
        code: code,
        name: "情報太郎"
    }),
)
}

const postSample2 = (req, res) => {
    const { code, postcode, address } = req.body;

    console.log({
        code,
        postcode,
        address
    })

    res.send(JSON.stringify({
        status: "OK",
        postcode: postcode
    })
)
}

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

const deleteSample2 = (req, res) => {
    const { code } = req.query;

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}

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

const getFruits = (req, res) => {
    const fruits = [
        { en: "apple", ja: "りんご" },
        { en: "lemon", ja: "レモン" },
        { en: "grape", ja: "ぶどう" }
    ]

    res.send(JSON.stringify(fruits));
}

const getFruitByName = (req, res) => {
    const fruits = [
        { en: "apple", ja: "りんご" },
        { en: "lemon", ja: "レモン" },
        { en: "grape", ja: "ぶどう" }
    ]

    const fruitName = req.params.name;

    const fruit = fruits.find(f => f.en === fruitName);

    if (fruit) {
        res.send(JSON.stringify(fruit));
    } else {
        res.send(JSON.stringify({
            status: "error",
            en: fruitName,
            cause: "not found!"
        }))
    }
}
   
export const sample1Controller = {
    postSample1,
    getPathParamSample1,
    putSample1,
    deleteSample1,
    getSample1,
    postSample2,
    putSample2,
    deleteSample2,
    getSample3,
    postSample3,
    putSample3,
    deleteSample3,
    getFruits,
    getFruitByName,
}