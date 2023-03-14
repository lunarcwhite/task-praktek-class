class BankAccount 
{
    nomorRekening;
    saldo;

    simpanAccount(nomorRekening, saldo)
    {
        const account = {
            nomorRekening: nomorRekening,
            saldo: saldo
        }
        this.nomorRekening = nomorRekening;
        this.saldo = saldo;
        return account;
    }

    deposit(deposit)
    {
        return this.saldo += deposit;
    }

    tarikSaldo(tarik)
    {
        
        if (tarik > this.saldo) {
            return console.log('Saldo Kurang');
        }else{
            return this.saldo -= saldo
        }
    }

    cekSaldo()
    {
        return this.saldo;
    }
}

const account1 = new BankAccount();
account1.simpanAccount(12345, 100000);
const depositAccount1 = account1.deposit(100000);
const tarikSaldoAccount1 = account1.tarikSaldo(250000);
const cekSaldoAccount1 = account1.cekSaldo();
console.log(account1.simpanAccount());
