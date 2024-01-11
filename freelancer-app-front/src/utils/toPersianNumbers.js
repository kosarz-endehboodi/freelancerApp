const farsidigits=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];

export function toPersianNumberWithcomma(n){
    const numWithCommas=numberWithCommas(n);//1000,000 
    const persianNumber=topPersianNumbers(numWithCommas);
    return persianNumber;
}
function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"");

}
function topPersianNumbers(n){
    return n.toString().replace(/\d/g,(x)=>farsidigits[parseInt(x)]);
    
}