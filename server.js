const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
// app.use((req , res , next)=>{

//     res.render('maint.hbs');
    
// });
hbs.registerPartials(__dirname + '/partials');

hbs.registerHelper('getCurrentYear' , ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt' , (text)=>{
    return text.toUpperCase();
});
app.get('/' , (req , res)=>{
    //res.send('<h1>Hello world</h1>')
    // res.send({
    //     name: 'Shubham',
    //     number: 208,
    //     likes:[
    //         'one',
    //         'two'
    //     ]
    // });
    res.render('home.hbs' , {
        name: 'Shubham',
        number: 208,
        // currentYear: new Date().getFullYear(),
        pageTitle: 'Home'
    })
});

app.get('/about' , (req , res)=>{
    res.render('about.hbs' , {
        name: 'Shubham',
        // currentYear: new Date().getFullYear(),
        pageTitle: 'About'
    })
})

app.get('/bad' , (req , res)=>{
    res.send({
        errorMessage : 'Sorry, but it\'s a bad request.'
    });
})

app.listen(3000 , ()=>{
    console.log('Server is up and running at Port - 3000');
});