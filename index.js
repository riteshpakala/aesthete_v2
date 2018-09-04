var express = require("express");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var admin = require("firebase-admin");
var firebase = require("firebase");
var bodyParser = require('body-parser');
var formidable = require('formidable'),
    readChunk = require('read-chunk'),
    fileType = require('file-type');
var pug = require('pug');
var RedisStore = require('connect-redis')(session);
var redis = require('redis');
var cors = require('cors');
var redisClient = redis.createClient();



// redisClient.on('ready',function() {
//  console.log("Redis is ready");
// });

// redisClient.on('error',function(error) {
//   console.log(error);
//  console.log("Error in Redis");
// });

var fs = require('fs');
var https = require('https');
var http = require('http');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

var loggedIn = false;
var newsletterHide = false;


firebase.initializeApp(config);

app.use(express.static(__dirname + '/res/'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://staff.aesthete.us");
  // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:6379");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie, X-IP, X-AUTHENTICATION");
  next();
});

app.use(cookieParser('AESTHETE-12-16-17-ajkwadkns'));
// app.use(cors({credentials: true, origin: 'https://www.aesthete.us'}));


app.use(bodyParser.urlencoded({ extended: true }));



router.use(function (req,res,next) {
  console.log("/" + req.method + " - IP: "+ req.connection.remoteAddress);
  next();
});

var sess;

var memberCount = "867";

router.get("/", isAuthenticated, function(req,res){
  console.log("logged in => "+loggedIn);

  if (loggedIn){
    res.render("index", { loggedIn : loggedIn, firstName : req.session.firstName.toUpperCase(), accountNum : req.session.accountNum, newsletterHide : newsletterHide, memberCount : memberCount });
  }else{

    res.render("index", { loggedIn : loggedIn, newsletterHide : newsletterHide, memberCount : memberCount });
  }

});

router.post("/signup/create", isAuthenticated, function(req,res){
  console.log(req.body.email);
  console.log(req.body.password);
  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).then(function() {
    // Sign-in successful.
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(function() {
      // Sign-in successful.
      console.log(firebase.auth().currentUser.uid);

      var code = req.body.firstName.toLowerCase()+randomString(4, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

      admin.database().ref("users/"+firebase.auth().currentUser.uid).set({"firstName":req.body.firstName,"lastName":req.body.lastName,"email":req.body.email});
      admin.database().ref("codes/"+firebase.auth().currentUser.uid).set("Aesthete-10382");
        req.session.email = req.body.email;
        req.session.firstName = req.body.firstName;
        req.session.lastName = req.body.lastName;
        req.session.accountNum = code;
        req.session.user = firebase.auth().currentUser.uid;

        req.session.save();

        intercomClient.users.create({
          email: req.body.email,
          name: req.session.firstName + " " + req.body.lastName,
          user_id: firebase.auth().currentUser.uid
        });

      loggedIn = true;
    }).then(function() {
      loggedIn = true;


      res.send({success: true});


    }).catch(function(error){
      console.log(error);
    });
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    res.status(500).send({error: errorMessage});
    // ...
  });
});

router.post("/login", function(req,res){

  console.log("@@@HELLO ==>"+req.sessionID);
  // res.end();
  // req.session.
  // console.log(req.cookies);
  console.log(req.body.email);
  console.log(req.body.password);
  req.session.email = req.body.email;
  req.session.save();
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(function(user) {
    // Sign-in successful.
    console.log(user.uid);
    req.session.user = user.uid;


    //update session var
    var child = admin.database().ref("users/"+firebase.auth().currentUser.uid).once('value').then(function(snapshot){

        req.session.email = snapshot.val()['email'];
        req.session.firstName = snapshot.val()['firstName'];
        req.session.lastName = snapshot.val()['lastName'];



        var child2 = admin.database().ref("codes/"+firebase.auth().currentUser.uid).once('value').then(function(snapshot2){
          req.session.accountNum = snapshot2.val();


          loggedIn = true;
        }).then(function(){
          console.log("Completed - Login Flow");
          req.session.save(function(err){

            if (err){
              console.log(err);

            }else{
//, { expires: new Date() - 1, httpOnly: false });

              loggedIn = true;
              // res.redirect("/");
              intercomClient.users.create({
                email: req.session.email,
                name: req.session.firstName + " " + req.session.lastName,
                user_id: req.session.user
              });
              res.status(200).send({success: true});

            }

          });

        });
      });


    // res.json({success : true, status : 200});


  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;

    res.status(500).send({error: errorMessage});
  });

});

router.get("/login/req", function(req,res){
    res.send({succes:true});

});

router.get("/signup", isAuthenticated, function(req,res){
  if (loggedIn) {
    res.render("index", { loggedIn : loggedIn, firstName : req.session.firstName, newsletterHide : newsletterHide, memberCount : memberCount });
  }else{
    res.render("signup", { loggedIn : loggedIn, newsletterHide : newsletterHide, memberCount : memberCount });
  }
});

router.get("/login", isAuthenticated, function(req,res){
  console.log("hit login");
  if (loggedIn) {
    res.render("index", { loggedIn : loggedIn, firstName : req.session.firstName.toUpperCase(), accountNum : req.session.accountNum, newsletterHide : newsletterHide });
  }else{
    res.render("login", { loggedIn : loggedIn, newsletterHide : newsletterHide });
  }
});

router.get("/logout", isAuthenticated, function(req,res){
  // req.session.destroy(function(err) {
  //     if(err) {
  //       console.log(err);
  //     } else {

  //       res.render("index", { loggedIn : loggedIn  });
  //     }
  //   });
  firebase.auth().signOut().then(function() {
    // Sign-in successful.
    loggedIn = false;
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {

        res.render("index", { loggedIn : loggedIn  });
      }
    });


  }).catch(function(error){
    console.log(error);
  });
});
router.post("/blog/postFeatureImage",function(req,res){
    var child = admin.database().ref("blog/count").once('value').then(function(snapshot){
      var count = snapshot.val();

      var photos = [],
      form = new formidable.IncomingForm();

      // Tells formidable that there will be multiple files sent.
      // form.multiples = true;
      // Upload directory for the images

      // Invoked when a file has finished uploading.


      console.log(form.type);
      form.on('file', function (name, file) {
          // Allow only 3 files to be uploaded.
          // if (photos.length === 1) {
          //     fs.unlink(file.path);
          //     return true;
          //
          var buffer = null,
              type = null,
              filename = '';

          // Read a chunk of the file.
          buffer = readChunk.sync(file.path, 0, 262);
          // Get the file type using the buffer read using read-chunk
          type = fileType(buffer);


          fs.mkdirSync(__dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/");
          // Check the file type, must be either png,jpg or jpeg
          if (type !== null && (type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg')) {
              // Assign new file name
              filename = file.name;

              // Move the file with the new file name
              fs.rename(file.path, __dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/"+ filename);

              // Add to the list of photos
              photos.push({
                  status: true,
                  filename: filename,
                  type: type.ext,
                  publicPath: 'uploads/' + filename
              });
              res.send({success: true});

          } else {
              // photos.push({
              //     status: false,
              //     filename: file.name,
              //     message: 'Invalid file type'
              // });
              // fs.unlink(file.path);
          }
        });

      form.on('error', function(err) {
          console.log('Error occurred during processing - ' + err);
      });

      // Invoked when all the fields have been processed.
      form.on('end', function() {
          console.log('Feature Image have been processed.');
      });

      // Parse the incoming form fields.
      form.parse(req, function (err, fields, files) {
          // res.status(200).json(photos);
      });
    });

});
router.post("/blog/postHeaderImage",function(req,res){
    var child = admin.database().ref("blog/count").once('value').then(function(snapshot){
      var count = snapshot.val();

      var photos = [],
      form = new formidable.IncomingForm();

      // Tells formidable that there will be multiple files sent.
      // form.multiples = true;
      // Upload directory for the images

      // Invoked when a file has finished uploading.


      console.log(form.type);
      form.on('file', function (name, file) {
          // Allow only 3 files to be uploaded.
          // if (photos.length === 1) {
          //     fs.unlink(file.path);
          //     return true;
          //
          var buffer = null,
              type = null,
              filename = '';

          // Read a chunk of the file.
          buffer = readChunk.sync(file.path, 0, 262);
          // Get the file type using the buffer read using read-chunk
          type = fileType(buffer);


          // Check the file type, must be either png,jpg or jpeg
          if (type !== null && (type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg')) {
              // Assign new file name
              filename = file.name;

              // Move the file with the new file name
              fs.rename(file.path, __dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/"+ filename);

              // Add to the list of photos
              photos.push({
                  status: true,
                  filename: filename,
                  type: type.ext,
                  publicPath: 'uploads/' + filename
              });
              res.send({success: true});

          } else {
              // photos.push({
              //     status: false,
              //     filename: file.name,
              //     message: 'Invalid file type'
              // });
              // fs.unlink(file.path);
          }
        });

      form.on('error', function(err) {
          console.log('Error occurred during processing - ' + err);
      });

      // Invoked when all the fields have been processed.
      form.on('end', function() {
          console.log('Header Image have been processed.');
      });

      // Parse the incoming form fields.
      form.parse(req, function (err, fields, files) {
          // res.status(200).json(photos);
      });
    });

});
router.post("/blog/postHeaderImageMobile",function(req,res){
    var child = admin.database().ref("blog/count").once('value').then(function(snapshot){
      var count = snapshot.val();
      var photos = [],
      form = new formidable.IncomingForm();

      // Tells formidable that there will be multiple files sent.
      // form.multiples = true;
      // Upload directory for the images

      // Invoked when a file has finished uploading.


      console.log(form.type);
      form.on('file', function (name, file) {
          // Allow only 3 files to be uploaded.
          // if (photos.length === 1) {
          //     fs.unlink(file.path);
          //     return true;
          //
          var buffer = null,
              type = null,
              filename = '';

          // Read a chunk of the file.
          buffer = readChunk.sync(file.path, 0, 262);
          // Get the file type using the buffer read using read-chunk
          type = fileType(buffer);


          fs.mkdirSync(__dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/mobile/");
          // Check the file type, must be either png,jpg or jpeg
          if (type !== null && (type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg')) {
              // Assign new file name
              filename = Date.now() + '-' + file.name;

              // Move the file with the new file name
              fs.rename(file.path, __dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/mobile/"+ filename);

              // Add to the list of photos
              photos.push({
                  status: true,
                  filename: filename,
                  type: type.ext,
                  publicPath: 'uploads/' + filename
              });
              res.send({success: true});

          } else {
              // photos.push({
              //     status: false,
              //     filename: file.name,
              //     message: 'Invalid file type'
              // });
              // fs.unlink(file.path);
          }
        });

      form.on('error', function(err) {
          console.log('Error occurred during processing - ' + err);
      });

      // Invoked when all the fields have been processed.
      form.on('end', function() {
          console.log('Header Image Mobile have been processed.');
      });

      // Parse the incoming form fields.
      form.parse(req, function (err, fields, files) {
          // res.status(200).json(photos);
      });
    });

});

router.post("/blog/postImage",function(req,res){
    var child = admin.database().ref("blog/count").once('value').then(function(snapshot){
        var count = snapshot.val();
      var photos = [],
      form = new formidable.IncomingForm();

      // Tells formidable that there will be multiple files sent.
      // form.multiples = true;
      // Upload directory for the images

      // Invoked when a file has finished uploading.


      console.log(form.type);
      form.on('file', function (name, file) {
          // Allow only 3 files to be uploaded.
          // if (photos.length === 1) {
          //     fs.unlink(file.path);
          //     return true;
          //
          var buffer = null,
              type = null,
              filename = '';

          // Read a chunk of the file.
          buffer = readChunk.sync(file.path, 0, 262);
          // Get the file type using the buffer read using read-chunk
          type = fileType(buffer);

          fs.mkdirSync(__dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/images/");

          // Check the file type, must be either png,jpg or jpeg
          if (type !== null && (type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg')) {
              // Assign new file name
              filename = file.name;

              // Move the file with the new file name
              fs.rename(file.path, __dirname+'/res/images/inspiration/blog/posts/'+(count+1)+"/images/"+ filename);

              // Add to the list of photos
              photos.push({
                  status: true,
                  filename: filename,
                  type: type.ext,
                  publicPath: 'uploads/' + filename
              });
              res.send({success: true});

          } else {
              // photos.push({
              //     status: false,
              //     filename: file.name,
              //     message: 'Invalid file type'
              // });
              // fs.unlink(file.path);
          }
        });

      form.on('error', function(err) {
          console.log('Error occurred during processing - ' + err);
      });

      // Invoked when all the fields have been processed.
      form.on('end', function() {
          console.log('Image have been processed.');
      });

      // Parse the incoming form fields.
      form.parse(req, function (err, fields, files) {
          // res.status(200).json(photos);
      });

    });

});


router.post("/blog/postText",function(req,res){
    // console.log(req.body.text);
    var child = admin.database().ref("blog/count").once('value').then(function(snapshot){
        var count = snapshot.val();
        fs.readFile(__dirname+'/views/inspiration/blog/first.html', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          var first = data;
          fs.readFile(__dirname+'/views/inspiration/blog/last.html', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            var last = data;

            //Combine
            fs.mkdirSync(__dirname+'/views/inspiration/blog/posts/'+(count+1));
            admin.database().ref("blog/posts/"+(count+1)).set({"summary":req.body.summary, "title":req.body.title, "date":req.body.date});
            var stream = fs.createWriteStream(__dirname+'/views/inspiration/blog/posts/'+(count+1)+'/main.ejs');
              stream.once('open', function(fd) {
              stream.write(first);
              stream.write(req.body.text);
              stream.write(last);
              stream.end();
            });

            admin.database().ref("blog/count").set(count+1);
          });
        });


    });


});

router.get("/blog/posts/req",function(req,res){

    var child = admin.database().ref("blog/posts").once('value').then(function(snapshot){
        res.send(snapshot.val())
    });
});

router.post("/newsletter",function(req,res){
    // console.log(req.body.text);

    if(req.body.email){
      intercomClient.users.create({
        email: req.body.email,
        name: req.connection.remoteAddress
      });
    }

    var mcReq = {
      id: 'a208f3264a',
      email: { email: req.body.email },
      ip_signup: req.connection.remoteAddress,
      double_optin: false
    };

    mc.lists.subscribe(mcReq, function(data) {
      console.log(data);
    }, function(error) {
        console.log(error);
    });

    //Setup for newsletter subscription upload for Mailchimp



    req.session.newsletterHide = true;

    res.send({success: true});


});


router.get("/privacy", isAuthenticated, function(req,res){
  res.render("privacy", { loggedIn : loggedIn });
});

router.get("/returns", isAuthenticated, function(req,res){
  res.render("returns", { loggedIn : loggedIn });
});

router.get("/faq", isAuthenticated, function(req,res){
  res.render("faq", { loggedIn : loggedIn });
});

router.get("/popup", isAuthenticated, function(req,res){
  res.render("popup", {popup : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/inspiration", isAuthenticated, function(req,res){

  res.render("inspiration", { ourstory : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/inspiration/pricing", isAuthenticated, function(req,res){
  res.render("pricing", { pricing : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/inspiration/sourcing", isAuthenticated, function(req,res){
  res.render("sourcing", { sourcing : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/blog", isAuthenticated, function(req,res){
  res.render("blog", { blog : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/blog/:id", isAuthenticated, function(req,res){
  // console.log(req.params.id);
  var toRemove = ':';
  var index = req.params.id.replace(toRemove,'');
  console.log(index);
  res.render("inspiration/blog/posts/"+index+"/main", { blog : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/inspiration/sustainability", isAuthenticated, function(req,res){
  res.render("sustainability");
});


router.get("/cart", isAuthenticated, function(req,res){
  res.render("cart", { loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/shop", isAuthenticated, function(req,res){
  res.render("shop", { featured : true, loggedIn : loggedIn, newsletterHide : newsletterHide, memberCount: memberCount });
});
router.get("/shop/", isAuthenticated, function(req,res){
  res.render("shop", { featured : true, loggedIn : loggedIn, newsletterHide : newsletterHide, memberCount:memberCount });
});
router.get("/shop/tees", isAuthenticated, function(req,res){
  res.render("tees", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/tees/", isAuthenticated, function(req,res){
  res.render("tees", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/boots", isAuthenticated, function(req,res){
  res.render("boots", { boots : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/boots/", isAuthenticated, function(req,res){
  res.render("boots", { boots : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/coats", isAuthenticated, function(req,res){
  res.render("coats", { coats : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/coats/", isAuthenticated, function(req,res){
  res.render("coats", { coats : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/vintage", isAuthenticated, function(req,res){
  res.render("vintage", { vintage : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/vintage/", isAuthenticated, function(req,res){
  res.render("vintage", { vintage : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/vintage/tees", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("vintagetees", { vintage : true, loggedIn : loggedIn});
  }else{
    res.redirect("/");
  }
});
router.get("/shop/vintage/tees/", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("vintagetees", { vintage : true, loggedIn : loggedIn});
  }else{
    res.redirect("/");
  }
});
router.get("/shop/accessories", isAuthenticated, function(req,res){
  res.render("accessories", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/accessories/", isAuthenticated, function(req,res){
  res.render("accessories", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

//Sub Product Pages
router.get("/shop/product/wool-tees", isAuthenticated, function(req,res){
  res.render("product/wooltees", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/wool-tees/", isAuthenticated, function(req,res){
  res.render("product/wooltees", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-tees", isAuthenticated, function(req,res){
  res.render("product/cottontees", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-tees/", isAuthenticated, function(req,res){
  res.render("product/cottontees", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-striped", isAuthenticated, function(req,res){
  res.render("product/cottonstriped", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-striped/", isAuthenticated, function(req,res){
  res.render("product/cottonstriped", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/shop/product/lace-up", isAuthenticated, function(req,res){
  res.render("product/laceup", { boots : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/lace-up/", isAuthenticated, function(req,res){
  res.render("product/laceup", { boots : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/shop/product/overcoat", isAuthenticated, function(req,res){
  res.render("product/overcoat", { coats : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/overcoat/", isAuthenticated, function(req,res){
  res.render("product/overcoat", { coats : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/shop/product/cuff", isAuthenticated, function(req,res){
  res.render("product/cuff", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cuff/", isAuthenticated, function(req,res){
  res.render("product/cuff", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

//Product Pages
//Variants for WoolTees
router.get("/shop/product/wool-tees/main:id", isAuthenticated, function(req,res){
  res.render("product/wooltees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/wool-tees/main/:id", isAuthenticated, function(req,res){
  res.render("product/wooltees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//cotton tees
router.get("/shop/product/cotton-tees/main:id", isAuthenticated, function(req,res){
  res.render("product/cottontees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-tees/main/:id", isAuthenticated, function(req,res){
  res.render("product/cottontees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//cotton striped
router.get("/shop/product/cotton-striped/main:id", isAuthenticated, function(req,res){
  res.render("product/cottonstriped/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-striped/main/:id", isAuthenticated, function(req,res){
  res.render("product/cottonstriped/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/shop/product/wool-tees/main", isAuthenticated, function(req,res){
  res.render("product/wooltees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/wool-tees/main/", isAuthenticated, function(req,res){
  res.render("product/wooltees/main", { tees : true, loggedIn : loggedIn , newsletterHide : newsletterHide });
});
//cotton tees
router.get("/shop/product/cotton-tees/main", isAuthenticated, function(req,res){
  res.render("product/cottontees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-tees/main/", isAuthenticated, function(req,res){
  res.render("product/cottontees/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//cotton striped
router.get("/shop/product/cotton-striped/main", isAuthenticated, function(req,res){
  res.render("product/cottonstriped/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cotton-striped/main/", isAuthenticated, function(req,res){
  res.render("product/cottonstriped/main", { tees : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//
//Boots
router.get("/shop/product/lace-up/main:id", isAuthenticated, function(req,res){
  res.render("product/laceup/main", { boots : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/lace-up/main/:id", isAuthenticated, function(req,res){
  res.render("product/laceup/main", { boots : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//

//Overcoat
router.get("/shop/product/overcoat/main", isAuthenticated, function(req,res){
  res.render("product/overcoat/main", { coats : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/overcoat/main/", isAuthenticated, function(req,res){
  res.render("product/overcoat/main", { coats : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//

//Accessories
router.get("/shop/product/cuff/main:id", isAuthenticated, function(req,res){
  res.render("product/cuff/main", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/cuff/main/:id", isAuthenticated, function(req,res){
  res.render("product/cuff/main", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});

router.get("/shop/product/tote/main", isAuthenticated, function(req,res){
  res.render("product/tote", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
router.get("/shop/product/tote/main/", isAuthenticated, function(req,res){
  res.render("product/tote", { accessories : true, loggedIn : loggedIn, newsletterHide : newsletterHide });
});
//

//Vintage
//
router.get("/shop/product/vintage/parka", isAuthenticated, function(req,res){
  if(loggedIn){
    res.render("product/vintage/parka", { vintage : true, loggedIn : loggedIn });
  }else{
      res.redirect("/");
  }
});
router.get("/shop/product/vintage/parka/", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("product/vintage/parka/", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/poem", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("product/vintage/poem", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/poem/", isAuthenticated, function(req,res){
  if(loggedIn){
    res.render("product/vintage/poem/", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/francois", isAuthenticated, function(req,res){
   if(loggedIn){
    res.render("product/vintage/francois", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/francois/", isAuthenticated, function(req,res){
  if(loggedIn){
    res.render("product/vintage/francois", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/jenesaisquoi", isAuthenticated, function(req,res){
  if(loggedIn){
    res.render("product/vintage/jenesaisquoi", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/jenesaisquoi/", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("product/vintage/jenesaisquoi/", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/indecision", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("product/vintage/indecision", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});
router.get("/shop/product/vintage/indecision/", isAuthenticated, function(req,res){
  if(loggedIn){
  res.render("product/vintage/indecision", { vintage : true, loggedIn : loggedIn });
  }else{
    res.redirect("/");
  }
});


//
function isAuthenticated(req, res, next) {
  if (req.session.user){
    loggedIn = true;
  }else{
    loggedIn = false;
  }

  if (req.session.newsletterHide){
    newsletterHide = true;
  }else{
    newsletterHide = false;
  }

  return next();
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     loggedIn = true;
    //     return next();
    //   } else {
    //     loggedIn = false;
    //     // res.redirect('/');
    //     return next();
    //     // res.render(next(), { locals : { loggedIn : false } });
    //   }
    // });
}
//

//
app.use("/",router);

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
});

app.use(function(error, req, res, next) {
      console.log(error);
     res.render('404', { url: req.url });
  });

app.listen(8080, function(){
  console.log("Live at Port 8080");
});


// const server = http.createServer();
// server.on('request', (request, response) => {
//   // the same kind of magic happens here!
//   res.render('/');
// });

// // set up a route to redirect http to https
// httpServer.get('*',function(req,res){
//     res.redirect('https://aesthete.us'+req.url)
// })

// // have it listen on 8080
// http.createServer((request, response) => {
//   const { headers, method, url } = request;
//   let body = [];
//   request.on('error', (err) => {
//     console.error(err);
//   }).on('data', (chunk) => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // At this point, we have the headers, method, url and body, and can now
//     // do whatever we need to in order to respond to this request.
//   });
// }).listen(8080);

// var port = 3000;

// var options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/aesthete.us/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/aesthete.us/fullchain.pem'),
//     ca: fs.readFileSync('/etc/letsencrypt/live/aesthete.us/chain.pem')
// };

// var server = https.createServer(options, app).listen(port, function(){
//   console.log("Express https server listening on port " + port);
// });
