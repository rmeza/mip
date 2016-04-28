<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ubicacion extends Model
{
    protected $table = "ubicaciones";
    protected $fillable = array('id','name','description');
}
