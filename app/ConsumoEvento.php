<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConsumoEvento extends Model
{
  protected $table = "consumoeventos";
  protected $fillable = array('idevento','consumeqty');
}
