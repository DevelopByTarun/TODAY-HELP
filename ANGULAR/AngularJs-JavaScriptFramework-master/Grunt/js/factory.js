app.factory("myfactory",()=>{
   var object = {
       menu:[{"name":"Home","link":"pages/name.html"},{"name":"Contact Us","link":"pages/contact.html"},{"name":"About Us","link":"pages/about.html"},{"name":"Features","link":"pages/feature.html"},{"name":"Partners","link":"pages/partner.html"}],
       
       sideMenu:[{"name":"Shoes","jsonname":"shoeJSON","function":"shoeShow"},{"name":"Shirts","jsonname":"shirtJSON","function":"shirtShow"},{"name":"Sport Accessories","jsonname":"shoeJSON","function":"sportShow"},{"name":"CART","jsonname":"cart","function":"cartShow"}],
       
       shoeJSON:[{"id":1,"name":"shoe 1","price":1234,"quantity":10,"image":"http://figos.my/image/cache/data/products/shoes/kpro/figos-k-pro-futsal-shoes-blue-1-600x500.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":2,"name":"shoe 2","price":5431,"quantity":20,"image":"https://gloimg.twinkledeals.com/td/2015/201511/goods-img/1464827501047450032.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":3,"name":"shoe 3","price":6543,"quantity":10,"image":"https://4.imimg.com/data4/HD/QE/MY-7609322/men-s-leather-shoe-250x250.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":4,"name":"shoe 4","price":2419,"quantity":10,"image":"https://www.tgw.com/wcsstore/CatalogAssetStore/Attachment/images/products/golf/P62959/i-whitebrown-qv.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "}],
       
        shirtJSON:[{"id":1,"name":"shirt 1","price":1234,"quantity":10,"image":"https://3.imimg.com/data3/UY/NY/MY-3592833/men-shirt-250x250.jpeg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":2,"name":"shirt 2","price":5431,"quantity":10,"image":"http://www.hoax1994.com/320-home_default/check-shirts.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":3,"name":"shirt 3","price":6543,"quantity":10,"image":"https://4.imimg.com/data4/NQ/LC/MY-24477798/ladies-formal-shirts-250x250.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":4,"name":"shirt 4","price":2419,"quantity":10,"image":"https://5.imimg.com/data5/VX/PD/MY-29989887/men-s-casual-shirt-250x250.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "}],
       
       sportJSON:[{"id":1,"name":"Cricket Kit","price":8900,"quantity":10,"image":"http://www.sportsgeo.com/image/cache//catalog/products/gm/GM%20FULL%20SIZE%20COMPLETE%20KIT%20Without%20Helmet%20Cricket%20Set-250x250.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":2,"name":"basket ball","price":1000,"quantity":20,"image":"http://www.basketballforcoaches.com/wp-content/uploads/2016/12/wilson-evolution.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":2,"name":"tennis racket","price":1500,"quantity":10,"image":"https://s-media-cache-ak0.pinimg.com/736x/ec/5d/a3/ec5da38603064126d31f34f3fd52e86a.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":3,"name":"Cosco Balls","price":500,"quantity":10,"image":"https://3.imimg.com/data3/CD/JO/MY-13329405/tennis-ball-cosco-century-250x250.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "},{"id":4,"name":"cycle","price":3500,"quantity":30,"image":"https://4.imimg.com/data4/YW/NU/MY-11763225/ragerbag-shoker-ranger-cycle-250x250.jpg","desc":"abdadaa rawrar ar ef e fae f a . ad aef a fa fearaeraer earear . "}],
       
       
       cart:[],
       
       ComputeTotal(cart){
           var sum=0;
           cart.forEach((x)=>{
               sum = sum+ x.price;
//               console.log(sum);
               
           });
           return sum;
       },
       
       img:[{"link":"https://www.nuggetmarket.com/img/nugget-markets-logo.png"}],
       
       accordian:[{"name":"Queechua Shoes","link":"http://www.holabirdsports.com/blog/wp-content/uploads/2015/04/TennisMagazineShoes_06_Babolat.jpg"},{"name":"Clobe Slim fit","link":"https://s-media-cache-ak0.pinimg.com/originals/c3/ba/13/c3ba13d330365fd45d7db64b82b0c005.jpg"},{"name":"kookaburra Bat","link":"http://alltimelists.com/wp-content/uploads/2016/07/Cricket-Bat.jpg"}
                 ],
   };
    
    return object;
});