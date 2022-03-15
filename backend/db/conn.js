const mongoose=require('mongoose');

const DB="mongodb+srv://admin:1234@cluster0.0lord.mongodb.net/mymernstackdb?retryWrites=true&w=majority";
mongoose.connect(
    DB,{
        useNewUrlParser: true,
        //useCreateIndex: true,
        //useFindAndModify: false,
        useUnifiedTopology: true
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});