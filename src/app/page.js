 export default function Home() {
 return (
 <html lang="en">

 <head>
   <meta charset="UTF-8">
   </meta>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   </meta>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </meta>
   <title>Note Book</title>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css">
   </link>
   <link rel="preconnect" href="https://fonts.gstatic.com">
   </link>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   </link>

   <link rel="stylesheet" href="style.css">
   </link>
 </head>

 <body box-border>
   <div class="container-fluid indexbody bg-sky-900 h-screen text-white ">
     <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
       <div class="container-fluid">
         <a class="text-white navbar-brand brand-item" href="index.html">NOTEBOOK</a>
         <a class="text-white navbar-brand ml-auto brand-item" href="WallOfNotes.html">Wall Of Notes</a>
       </div>
     </nav>

     <div class="content h-5/6 grid justify-center content-around">
       <div class="container ">
         <h1 class="display-1">NOTEBOOK</h1>
       </div>
     </div>
   </div>
 </body>

 </html>
 )
 }