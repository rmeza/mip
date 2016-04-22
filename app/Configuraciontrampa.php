<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Configuraciontrampa extends Model
{
  protected $fillable = [
      'id', 'numerotrampa', 'description','idplanta','idubicacion','idtipotrampa',
      'idclasificaiontrampa'
  ];
}
