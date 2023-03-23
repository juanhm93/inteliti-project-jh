<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoriaMedica extends Model
{
    use HasFactory;

     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'historia_medica';
    protected $fillable = ['nombre', 'fecha_nacimiento', 'sexo', 'estatura', 'peso'];
}
