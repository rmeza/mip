<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Tipotrampa;

class TipotrampaController extends Controller
{
  public function index()
  {
    $tipotrampas = Tipotrampa::all();
    return $tipotrampas;
  }
}
