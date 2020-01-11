const config = require("../configurations/config");
const sql = require("mssql");

var CategoryController = {
    getCategories: function(req, res) {
        try {
            sql.connect(config, err => {
                new sql.Request().execute("spCategoriasMostrar", (err, response) => {
                    if (err) {
                        return res.send({ e: err });
                    } else {
                        return res.send({
                            data2: response
                        });
                    }

                    //sql.close();
                });

                //sql.close();
            });
        } catch (error) {
            return res.send({ errCatch: error });
        }
    },
    newCategory: function(req, res) {
        sql.connect(config, err => {
            if (err) console.log(err);

            let data = req.body;

            let parametros = [
                { parametro: "nombre", type: sql.NVarChar, value: data.nombre },
                {
                    parametro: "descripcion",
                    type: sql.NVarChar,
                    value: data.descripcion
                }
            ];

            let request = new sql.Request();

            for (let p of parametros) {
                request.input(p.parametro, p.type, p.value);
            }
            ("Ndata");

            request.execute("dbo.spCategoriaInsertar", (err, response) => {
                if (err) {
                    return res.send({ error: err });
                } else {
                    res.send({ data: response, params: data });
                    sql.close();
                }
            });
        });
        //sql.close();
    }
};

module.exports = {
    CategoryController
};