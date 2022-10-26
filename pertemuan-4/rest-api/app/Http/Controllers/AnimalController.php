<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        return "Menampilkan seluruh animal";
    }


    public function store()
    {
        return "Menambahkan data animal";
    }

    public function update(Request $request, $id)
    {
        echo "{$request->nama}";
        return "Mengubah data animal" . $id;
    }

    public function destroy($id)
    {
        return "Menghapus data animal" . $id;
    }
}
