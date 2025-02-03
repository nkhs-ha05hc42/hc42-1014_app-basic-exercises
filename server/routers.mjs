import express from "express"
import path from "path"
import { sample1Controller, sample2Controller } from "./api/controllers.mjs"

const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)
routers.get("/api/8-1", sample1Controller.getSample1)
routers.post("/api/8-1", sample1Controller.postSample2)
routers.put("/api/8-1", sample1Controller.putSample2)
routers.delete("/api/8-1", sample1Controller.deleteSample2)
routers.get("/api/8-2", sample1Controller.getSample3)
routers.post("/api/8-2", sample1Controller.postSample3)
routers.put("/api/8-2", sample1Controller.putSample3)
routers.delete("/api/8-2", sample1Controller.deleteSample3)
routers.get("/api/8-3", sample1Controller.getFruits)
routers.get("/api/8-3/:name", sample1Controller.getFruitByName)
routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)
routers.put("/api/sample2/:id", sample2Controller.putSample2)
routers.delete("/api/sample2/:id", sample2Controller.deleteSample2)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers