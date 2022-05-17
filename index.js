let count=0
const getdata =(name)=>{
    var useinput = document.getElementById("input1")
    console.log(useinput.value)
    //api call

    console.log(count++, name)
}

const debounce =(callback,dealy)=>{
  let clear
  return function(){
      let that = this
      let arg=arguments
      clear && clearTimeout(clear)
     clear= setTimeout(function(){
        //   callback.apply(this,arguments)
        callback.apply(that,arg)

      },dealy)
  }
}



const betterDebounce = debounce(getdata,2000)("mrinal")

const data =(arguments)=>{
    console.log(`${arguments}`)
}
debounce(data,3000)("ram")