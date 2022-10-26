<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Date;

class AnimalController extends Controller
{

    /**
     * * Animals = [] : <array>
     * * - index : Menampilkan data animals
     * * - store : Menambahkan data animals
     * * - update : Mengubah data animals
     * * - destroy : Menghapus data animals
     * * - show : Menampilkan data animals berdasarkan id
     * * - search : Mencari data animals berdasarkan nama
     *
     * */

    public $animals = ["Ikan", "Kuda", "Buaya", "Python"];

    public function index()
    {
        foreach ($this->animals as $animal) {
            if (!$animal) {
                echo "";
            } else {
                echo "{$animal}<br>";
            }
        }
    }

    public function store(Request $request)
    {
        array_push($this->animals, $request->animal);
        echo "{$this->index()}";
    }

    public function update(Request $request, $id)
    {
        $animal = $request->animal;
        $this->animals[$id] = $animal;
        echo "{$this->index()}";
    }

    public function destroy($id)
    {
        $animal = $this->animals[$id];
        unset($animal, $id);
        echo "{$this->index()}";
    }
}
