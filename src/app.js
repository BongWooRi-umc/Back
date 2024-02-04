
sequelize.sync({force: false})
    .then(()=>{
        console.log("DB connected");

    })
    .catch((err)=>{
        console.error(err);
    });