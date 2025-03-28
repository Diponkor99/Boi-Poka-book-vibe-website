//Read Books LocalStorage add data
const LocalStorageAddReadData=()=>{
    const chackdata=localStorage.getItem('Read data')
    if(chackdata){
        const IntData=JSON.parse(chackdata)
        return IntData
    }
    else{
        return []
    }
}


const getdatachakAndAdd=(id)=>{
    const data=LocalStorageAddReadData();
    if(data.includes(id)){
        alert(`${id} alradey storages`)
    }
    else{
        data.push(id)
        const dataStr=JSON.stringify(data)
        localStorage.setItem('Read data',dataStr)
    }
}


//Wish List Book LocalStorage add Data

const WishListBooKLocalStorage=()=>{
    const cakeLocalStorage=localStorage.getItem('Wish List Books')
    if(cakeLocalStorage){
        const dataInt=JSON.parse(cakeLocalStorage)
        return dataInt
    }
    else{
        return []
    }
}

const WishListAdd=(id)=>{
    const data=WishListBooKLocalStorage();
    if(data.includes(id)){
        alert(`${id}, alradey book add Wish List`)
    }
    else{
        data.push(id)
        const dataStr=JSON.stringify(data)
        localStorage.setItem('Wish List Books',dataStr)
    }

}
export {getdatachakAndAdd,LocalStorageAddReadData ,WishListAdd,WishListBooKLocalStorage}