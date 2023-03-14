class BankAccount 
{
    nomorRekening;
    saldo = 0;

    simpanAccount(nomorRekening, saldo)
    {
        const account = {
            nomorRekening: nomorRekening,
            saldo: saldo
        }
        this.saldo = saldo;
        return account;
    }

    deposit(deposit)
    {
        console.log(`Berhasil Deposit ${deposit}`);
        return this.saldo += deposit;
    }

    tarikSaldo(tarik)
    {
        console.log(`Mencoba menarik saldo ${tarik}`);
        if(tarik < 50000){
            console.log('Minimal Penarikan adalah 50000');
        }else{
            if (this.saldo - tarik == 0) {
                console.log('Sisa Saldo tidak boleh nol');
            } else {
                if (tarik <= this.saldo ) {
                    this.saldo -= tarik
                    console.log(`Berhasil Menarik Saldo ${tarik}`);
                }else{
                    console.log('Saldo tidak mencukupi');
                }
            }
        }
        return this.saldo;
    }

    cekSaldo()
    {
        return this.saldo;
    }
}

const account1 = new BankAccount();
const account2 = new BankAccount();
const account3 = new BankAccount();

let simpanAccount1 = account1.simpanAccount(12345, 100000);
let tarikSaldoAccount1 = account1.tarikSaldo(100000);
console.log(simpanAccount1);
console.log(`Sisa saldo : ${tarikSaldoAccount1}`);

console.log('=======================================\n');

let simpanAccount2 = account1.simpanAccount(22322, 1000000);
let depoositAccount2 = account1.deposit(1000000);

console.log(simpanAccount2);
console.log(`Sisa saldo : ${depoositAccount2}`);

console.log('=======================================\n');

let simpanAccount3 = account2.simpanAccount(14222, 2000000);
let cekSaldoAccount3 = account2.cekSaldo();

console.log(simpanAccount3);
console.log(`Sisa saldo : ${cekSaldoAccount3}`);

console.log('=======================================\n');

let simpanAccount4 = account2.simpanAccount(26022, 300000);
let tarikSaldoAccount4 = account2.tarikSaldo(50000);

console.log(simpanAccount4);
console.log(`Sisa saldo : ${tarikSaldoAccount4}`);

console.log('=======================================\n');

let simpanAccount5 = account3.simpanAccount(55555, 500000);
let tarikSaldoAccount5 = account3.tarikSaldo(30000);

console.log(simpanAccount4);
console.log(`Sisa saldo : ${tarikSaldoAccount4}`);
