<?php

/**
 * * Class Animal
 * * Buat property animals : [] = <array> 
 * * Buat constructor animals: [] = <array>
 * * Buat Fungsi :
 * * - index : get all data array => foreach
 * * - store : menambahkan data animal => array_push()
 * * - update : memperbaharui data animal => $array[$index] = $array_value;
 * * - destroy : menghapus data animal => array_splice($array, jumlah_dihapus, $index)
 */

class Animal
{
    public $animals;

    public function __construct($data)
    {
        $this->animals = $data;
    }


    public function index()
    {
        foreach ($this->animals as $animal) {
            /** 
             * ! Cek array animal jika kosong maka echo "" || result array animal
             * */
            if (!$animal) {
                echo '';
            } else {
                echo "{$animal}<br/>";
            }
        }
    }

    public function store($data)
    {
        /** 
         * ! Cek kondisi ketika $data bukan <string>
         * ! Cek kondisi ketika $data berupa <string> kosong
         * */

        if (!is_string($data) || $data == '') {
            echo 'Data harus berupa string';
            echo "<br/>";
        } else {
            array_push($this->animals, $data);
        }
    }

    public function update($index, $data)
    {
        /** 
         * ! Cek kondisi ketika $index bukan <int>
         * ! Cek kondisi ketika $data bukan <string>
         * ! Cek kondisi ketika $data berupa <string> kosong
         * */

        if (!is_int($index) || !is_string($data) || $data == '') {
            echo 'Index harus berupa integer dan Data harus berupa string';
            echo "<br>";
        } else {
            $this->animals[$index] = $data;
        }
    }

    public function destroy($index)
    {
        /** 
         * ! Cek kondisi ketika $index bukan <int>
         * */

        if (!is_int($index)) {
            echo 'Index harus berupa integer';
            echo "<br>";
        } else {
            array_splice($this->animals, 1, $index);
        }
    }
}


$animal = new Animal(["Ayam", "Ikan"]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store("Kuda");
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";
