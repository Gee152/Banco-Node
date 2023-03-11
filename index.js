// modulos externos
let inquirer = require('inquirer')
let chalk = require('chalk')
//modulos internos
let fs = require('fs')
operation()
console.log('Iniciamos o Accounts')

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    msg: 'O que vc deseja fazer?',
    choices: [
      'Criar conta',
      'Consultar saldo',
      'Depoistar',
      'Sacar',
      'Sair'
    ]
  }
]).then((answer) =>{
  const action = answer['action']
    if(action === 'Criar conta'){
      createAccount()
    } else if(action === 'Consultar saldo'){

    } else if (action === 'Depositar'){

    } else if (action === 'Sacar'){

    } else if (action === 'Sair'){
        console.log(chalk.bgBlue.black('Obrigado por usar o Banco'))
        process.exit()
    }
}).catch((err) => console.log(err))
}

//criando conta
function createAccount(){
  console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco'))
  console.log(chalk.green('defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount(){
  inquirer.prompt([{
      name: 'accountName',
      msg: 'Escolha um nome para sua conta'
    }
  ]).then(answer => {
    const accountName = answer['accountName']
      console.info(accountName)

    if(!fs.existsSync('accounts')){
      fs.mkdirSync('accounts')
    }
      if(fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta já existe com esse nome, escolha outro!'),)
          buildAccount()
            return
      }
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0},', function(err) {
          console.log(err)
          },
        )
    console.log(chalk.green('Parabéns, a sua conta está criada!'))
      operation()
  }).catch(err => console.log(err))
}