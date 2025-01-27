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
   
   

export const sample1Controller = {
    postSample1,
    getPathParamSample1,
    putSample1,
    deleteSample1,
}