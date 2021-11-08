function namesSorter (departmentsArray) {
    let newArray = []
    for (let i =0; i < departmentsArray.length; i++){ //recorro la primera fase de arrays
      for (let j = 0; j < departmentsArray[i].length; j++){ //recorro los string de cada array
        newArray.push(departmentsArray[i][j])
      }
    }
    //arr.sort([compareFunction])
    newArray.sort(function(a,b){
      // comparamos longitud
      if(a.length > b.length){ 
        return 1
      }else if(a.length < b.length){
        return -1
      // si son igual de largas, comparamos alfabéticamente
      }else if( a < b){
        return -1
      }else{
        return 1
      }
    })
    return newArray;
  }