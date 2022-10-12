<?php

/**
 * * Class Animal
 * * Buat property animals : <string> 
 * * Buat Fungsi :
 * * - index : get all data array => foreach
 * * - store : menambahkan data hewan => array_push()
 * * - update : memperbaharui data hewan => array_pad()
 * * - destroy : menghapus data hewan => array_splice()
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
                return '';
            } else {
                echo "{$animal}<br/>";
            }
        }
    }

    public function store(string $data)
    {
        /** 
         * ! Cek kondisi ketika $data bukan <string>
         * */

        if (!is_string($data)) {
            echo "Must have equals string type <br>";
        } else {
            array_push($this->animals, $data);
        }
    }

    public function update(int $index, string $data)
    {
        /** 
         * ! Cek kondisi ketika $index bukan <int>
         * ! Cek kondisi ketika $data bukan <string>
         * */

        if (!is_int($index) && !is_string($data)) {
            echo "Must have equals number or string type <br>";
        } else {
            $this->animals[$index] = $data;
        }
    }

    public function destroy(int $index)
    {
        /** 
         * ! Cek kondisi ketika $index bukan <int>
         * */

        if (!is_int($index)) {
            echo "Must have equals int type <br>";
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
$animal->store("");
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";


echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";
