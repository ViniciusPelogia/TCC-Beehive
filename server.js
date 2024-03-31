import "dotenv/config";
import app from "./src/index.js";

const PORT = 3000

app.listen(PORT, () =>{
    console.log("O servidor está aberto!!");
});
