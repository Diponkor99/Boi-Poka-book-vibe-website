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
export {getdatachakAndAdd}