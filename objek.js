//Deklarasi objek
const karakter = {
nama:"amba",
level: 99,
HP: 50,
senjata: "pedang",
};
//Do Notation
console.log(karakter.nama);
console.log(karakter.level);
console.log(karakter.HP);
console.log(karakter.senjata);
//Bracket Notation
console.log(karakter[`nama`]);
console.log(karakter[`level`]);
console.log(karakter[`HP`]);
console.log(karakter[`senjata`]);
//template literal 
console.log(`selamat datang pemain ${karakter.nama}, levelmu ${karakter.level}, HP-Mu ${karakter.HP} dan senjatamu ${karakter.senjata}`);