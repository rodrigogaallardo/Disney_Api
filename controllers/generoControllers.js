
const getGeneros = (req,res) =>{
    res.json({
        msg: "Rest api get - Genero"
    })
};

const postGeneros = (req,res) =>{
    res.json({
        msg: "Rest api post - Genero"
    })
};
const putGeneros = (req,res) =>{
    res.json({
        msg: "Rest api put - Genero"
    })
};

const deleteGeneros = (req,res) =>{
    res.json({
        msg: "Rest api delete - Genero"
    })
};
export {getGeneros, postGeneros,putGeneros,deleteGeneros};