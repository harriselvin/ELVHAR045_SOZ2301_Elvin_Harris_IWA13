let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/**
 * @ts-check
 */

const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string' 
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    calculated = calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc()
  if (calculated > 2) {
    user = 'John'
    state = 'requesting'
  }
  if (calculated > 3) {
    state = 'idle'
  }
}

const checkUser = () => {
	if (user && state === 'requesting' && calculated === 3) {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()