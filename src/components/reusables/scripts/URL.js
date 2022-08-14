/* 
This script is used to get some parts of the URL for better routing
*/

export default class URL{
    static getFullURL(){
        const fullURL = window.location.href;
        return fullURL
    }
    static  getDomain(){
        const URL_Split = this.getFullURL().split('/')
        return (URL_Split[0]+URL_Split[1]+"//"+URL_Split[2]);
    }
}