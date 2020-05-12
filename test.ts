class MyClass{
}

type MySuperType = {

}

interface ISuperInterface {

}
console.log('THE TYPE IS ', nameof<String>())
console.log('THE TYPE IS ', nameof<Boolean>())
console.log('THE TYPE IS ', nameof<Number>())
console.log('THE TYPE IS ', nameof<Object>())
console.log('THE TYPE IS ', nameof<Array<string>>())
console.log('THE TYPE IS ', nameof<MySuperType>())
console.log('THE TYPE IS ', nameof<ISuperInterface>())