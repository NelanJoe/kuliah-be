<?php

/**
 * * OOP : Object Oriented Programming
 * * Class: Blueprint / Template / Cetakan
 * * Property: Data yang terdapat dari class = variable
 * * Method: function
 * * Object: Kue / Nilai
 */

//  * Membuat Class Person
class Person
{
    // * Membuat property
    private $nama;
    private $alamat;
    private $jurusan;

    public function __construct($nama, $alamat, $jurusan)
    {
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan;
    }


    // * Membuat getter nama
    public function getNama()
    {
        return $this->nama;
    }

    // * Membuat getter alamat
    public function getAlamat()
    {
        return $this->alamat;
    }

    // * Membuat getter jurusan
    public function getJurusan()
    {
        return $this->jurusan;
    }
}



$nelan = new Person("Nelan", "Bogor, Jawa Barat", "Teknik Informatika");


echo $nelan->getNama();
echo "<br>";
echo $nelan->getAlamat();
echo "<br>";
echo $nelan->getJurusan();

echo "<br>";

$budi = new Person("Budi Santoso", "Karawang, Jawa Barat", "Sistem Informasi");

echo $budi->getNama();
echo "<br>";
echo $budi->getAlamat();
echo "<br>";
echo $budi->getJurusan();
