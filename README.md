#Third Party Cookie Checker with node js && express

1. Clone the repo
2. run `npm install`
3.run `npm start` the server will start on http://127.0.0.1:3000/
4. http://127.0.0.1:3000/setcookie this endpoint will set cookie! on first run by default it'll not return the cookie it will return false so we will check cookie is saved or not by  fetching http://127.0.0.1:3000/getcookie this endpoint

# Example in implementing in React front end
```js
    // fetchCookie will check if we should run the get cookie
    const [fetchCookie, setFetchCookie] = useState(false);
    //Third Party cookies are enables or not will check TPCookieDisabled 
    const [TPCookieDisabled, setTPCookieDisabled] = useState(false);
    //an async useEffect hook will check on those
    useEffect(async () =>{
    await fetch('http://127.0.0.1:3000/setcookie',{
            method: 'GET',
            credentials: 'include',
            }).then(res=>res.json()).then(data=>{
            //on first run if it can save cookie by default it will retun false
            //if cookies are disabled it will return false
              if(data.isSaved === false){
                setFetchCookie(true)
              }else{
                //  if  cookie is saved  it will return the cookie value
                if(data.cookie){
                  setFetchCookie(false)
                  console.log('you have cookie')
                  //third party cookies are enabled whatever you want to do then
                }else{
                  setTPCookieDisabled(true)
                }
              }
            })
        },[])
    //impletentation of if we need to fetch get cookie 
         if(fetchCookie){
            fetch('http://127.0.0.1:3000/getcookie',{
            method: 'GET',
            credentials: 'include',
            }).then(res=>res.json()).then(data=>{
              console.log(data)
              if(data === false){
                setTPCookieDisabled(true)
                //third party cookies are disabled whatever you want to do then
              }else{
                setTPCookieDisabled(false)
                //third party cookies are enabled whatever you want to do then
              }
            })
        }
```
