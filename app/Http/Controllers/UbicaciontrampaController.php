<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Ubicacion;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UbicaciontrampaController extends Controller
{
  public function __construct()
  {
      // Apply the jwt.auth middleware to all methods in this controller
      $this->middleware('jwt.auth');
  }

  public function index()
  {
    $ubicaciones = Ubicacion::all();
    return $ubicaciones;
  }
}
