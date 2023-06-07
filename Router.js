import express from "express";
import fs from "fs/promises";
import bodyParser from "body-parser";

const router = express.Router();
const showFolder = "./public/shows/";
router.use(express.static("public"));
router.use(bodyParser.urlencoded());

router.use(bodyParser.json());
router.get("/", async (req, res) => {

    let ratsFiles = [];
    try {
        const files = await fs.readdir(showFolder);
        files.forEach((file) => {
            let splitFileName = file.split(".");
            if (splitFileName[1] === "rats") {
                ratsFiles.push(file);
            }
        });
        let jsonRatsFiles = JSON.stringify({ ratsFiles });
        res.render("index", { ratsFiles: jsonRatsFiles, files: ratsFiles });
    } catch (err) {
        console.error(err);
        res.send("Error loading shows.");
    }
    // fs.readdir(testFolder, (err, files) => {
    //     files.forEach((file) => {
    //         let splitFileName = file.split(".");
    //         if (splitFileName[1] === "rats") {
    //             ratsFiles.push(file);
    //         }
    //     });
    //     let jsonRatsFiles = JSON.stringify({ ratsFiles });
    //     res.render("index", { ratsFiles: jsonRatsFiles, files: ratsFiles });
    // });
});

router.post("/show", async (req, res) => {
    console.log(req.body)
    if (req.body.tFile) {
        console.log("Creating new show: ", req.body.tFile, ".rats");
        try {
          const files = await fs.readdir(showFolder);
          files.forEach((file) => {
              let splitFileName = file.split(".");
              if (splitFileName[0] === req.body.tFile) {
                  res.redirect('/')
              }
          });
      } catch (err) {
          console.error(err);
          //res.send("Error loading shows.");
      }
        try {
            await fs.writeFile(`${showFolder}/${req.body.tFile}.rats`, "");
            res.render("rats", {show: req.body.tFile});
        } catch (err) {
            console.error(err)
            //res.send("Could not create File");
        }

    }
    else {
        let show = req.body.rText.split('.')[0]
        res.render("rats", {show});
    }
});
router.get("/rats", (req, res) => {
    res.send("Let the show begin!");
});
router.get("*", (req, res) => {
    res.send("Page does not exist!!!!!!!!!");
});

export default router;
