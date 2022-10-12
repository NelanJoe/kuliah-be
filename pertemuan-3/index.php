<?php
// variable
$nama = "Nelan";
$jurusan = "Informatic";


// panggil variable
echo $nama;
echo "<br/>";
echo $jurusan;
echo "<br/>";




/**
 * * Percabangan or conditional
 * Nilai di atas 90 : A
 * Nilai di atas 80 : B
 * Selain nilai di atas: C 
 */


$nilai = 80;

if ($nilai > 90) {
    echo "Grade: A";
    echo "<br>";
} else if ($nilai > 80) {
    echo  "Grade: B";
    echo "<br>";
} else {
    echo "Grade: C";
    echo "<br>";
}



/**
 * * Looping
 * - Nilai awal : 0
 * - Kondisi / terminate: 10 (penghentian)
 * - increment: Menaikkan
 * - decrement: Menurukan
 * */


for ($i = 1; $i <= 10; $i++) {
    echo $i;
    echo "<br>";
};

/**
 * * Function
 * */


function hitungLuas(int $jari)
{
    $phi = 3.14;
    $hasil = $phi * $jari * $jari;
    return $hasil;
}


echo hitungLuas(5);
echo "<br>";

/**
 * * Array
 * * - Array dimulai dari index : 0
 * * - Akses array dengan variable diikuti dengan index : $variable[0]
 * 
 * * Array assosiatif
 * * - Key => Value
 * * - Akses array assosiatif dengan menggunakkan key : $variable['nama'];
 */

// Array
$animals = ["Cat", "Dog", "Horse"];


// Akses array
// echo $animals[0];
// echo "<br>";
// echo $animals[1];
// echo "<br>";
// echo $animals[2];
// echo "<br>";

// for ($i = 0; $i < count($animals); $i++) {
//     echo $animals[$i];
//     echo "<br/>";
// }

foreach ($animals as $animal) {
    echo $animal;
    echo "<br/>";
}
