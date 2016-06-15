<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleEvento extends Model
{
    //
    protected $table = "detalleeventos";
    protected $fillable = array('idplaga','idevento','quantity');
}
