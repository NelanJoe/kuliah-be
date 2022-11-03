<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // Buat kolom yang boleh diizinkan untuk diisi secara masal
    protected $fillable = ["nama", "nim", "email", "jurusan"];
}
